import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import {
  ChevronDown,
  User,
  Mail,
  Phone,
  Linkedin,
  GitBranch,
  Briefcase,
  GraduationCap,
  AlertCircle,
  Check,
  IdCard,
} from 'lucide-react';
import axios from 'axios';
import Lottie from 'lottie-react';
import animationData from './assets/data.json';

// New compact animated progress (same sizing)
const AnimatedProgress = ({ currentStep }) => {
  const steps = [
    { id: 1, name: 'Basic Details' },
    { id: 2, name: 'Domain Preferences' },
    { id: 3, name: 'Submitted' }
  ];
  const progressPct = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="w-full mb-8 ">
      <div className="relative flex justify-between  lg:ml-25 lg:mr-25 items-center">
        {/* Thinner base line */}
        <div className="absolute top-4 left-6 right-4 h-px bg-white rounded-full z-0"></div>

        {/* Thinner animated fill line (no circle) */}
        <div
          className="absolute top-4 left-7 h-px bg-[white rounded-full z-0 transition-all duration-700 ease-in-out"
          style={{ width: `calc((100% - 2rem) * ${progressPct / 100})` }}
        />

        {/* Step circles */}
        {steps.map(step => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id || (isActive && step.id === steps.length);
          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300
                  ${isCompleted
                    ? 'bg-[#1976D2] text-white shadow-md'
                    : isActive
                      ? 'bg-[#1976D2] text-white shadow'
                      : 'bg-black text-gray-200'
                  }`}
              >
                {isCompleted ? <Check className="w-4 h-4" strokeWidth={3} /> : step.id}
              </div>
              <span className={`mt-2 text-[10px] sm:text-xs font-medium whitespace-nowrap ${
                (isActive || isCompleted) ? 'text-white' : 'text-gray-400'
              }`}>
                {step.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CustomTypography = ({ children, className }) => {
  return (
    <p className={`text-sm text-center max-w-xs leading-relaxed ${className}`}>
      {children}
    </p>
  );
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center">
    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
    <span className="text-sm md:text-base">Submitting...</span>
  </div>
);

const Toast = ({ message, type, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-4 right-4 left-4 md:left-auto p-3 md:p-4 rounded-lg shadow-lg z-50 max-w-sm mx-auto md:mx-0 text-sm md:text-base transition-transform duration-300 transform ${
        type === 'success' ? 'bg-green-600' : 'bg-red-600'
      } text-white font-sans`}
      role="status"
      aria-live="polite"
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 text-white hover:text-gray-200" aria-label="Close notification">
          ×
        </button>
      </div>
    </div>
  );
};

const InputField = React.memo(({ placeholder, value, onChange, type = 'text', required = false, error, label, fullWidth = false }) => (
  <div className={`mb-2 ${fullWidth ? 'w-full' : 'w-full lg:w-[45%]'}`}>
    {label && <label className="block text-white text-lg mb-1">{label}</label>}
    <input
      className="w-full bg-transparent !border-0 !border-b-2 !border-gray-400 !rounded-none text-white placeholder-gray-400 p-2 focus:border-[#4d55ba] focus:outline-none"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      autoComplete="off"
    />
    {error && (
      <div className="mt-1 px-1 flex items-center text-red-400 text-xs">
        <AlertCircle className="w-3.5 h-3.5 mr-1" />
        <p>{error}</p>
      </div>
    )}
  </div>
));

// REPLACED TextAreaField to match accepted version
const TextAreaField = React.memo(({ placeholder, value, onChange, required = false, error, className = '', label }) => (
  <div className="mb-2 w-full">
    {label && <label className="block text-white text-lg mb-1">{label}</label>}
    <textarea
      placeholder={placeholder}
      value={value}
      wrap="off"
      onKeyDown={(e) => {
        if (e.key === 'Enter') e.preventDefault();
      }}
      onChange={(e) => {
        const sanitized = e.target.value.replace(/[\r\n]/g, ' ');
        onChange(sanitized);
      }}
      required={required}
      className={
        `w-full bg-transparent !border-0 !border-b-2 !border-gray-400 !rounded-none text-white placeholder-gray-400 p-2 resize-none focus:border-[#4d55ba] focus:outline-none
         whitespace-nowrap overflow-x-auto overflow-y-hidden no-horizontal-scrollbar ${className}`
      }
      style={{ whiteSpace: 'nowrap' }}
    />
    {error && (
      <div className="mt-1 px-1 flex items-center text-red-400 text-xs">
        <AlertCircle className="w-3.5 h-3.5 mr-1" />
        <p>{error}</p>
      </div>
    )}
  </div>
));

const CustomSelect = React.memo(({ placeholder, value, onChange, options = [], required = false, error, label }) => (
  <div className="mb-5 w-full lg:w-[45%]">
    {label && <label className="block text-white text-lg mb-1">{label}</label>}
    <select
      className="w-full bg-transparent !border-0 !border-b-2 !border-gray-400 !rounded-none mt-1 p-2 text-white focus:border-[#4d55ba] focus:outline-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === ' ') {
          e.stopPropagation();
        }
      }}
      required={required}
    >
      <option value="" className="text-black">
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option} className="text-black">
          {option}
        </option>
      ))}
    </select>
    {error && (
      <div className="mt-1 px-1 flex items-center text-red-400 text-xs">
        <AlertCircle className="w-3.5 h-3.5 mr-1" />
        <p>{error}</p>
      </div>
    )}
  </div>
));

const RadioField = React.memo(({ options, value, onChange, label }) => (
  <div className="mb-5 w-[90%] lg:w-full">
    <label className="block text-white text-lg mb-3">{label}</label>
    <div className="space-y-3">
      {options.map((option) => (
        <label key={option} className="flex items-center">
          <input
            type="radio"
            name={label}
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
            className="mr-3 w-4 h-4 text-[#4d55ba] border-gray-600 bg-transparent focus:ring-[#4d55ba]"
          />
          <span className="text-white">{option}</span>
        </label>
      ))}
    </div>
  </div>
));

const YearSelect = ({ value, onChange, options = [], error, label, placeholder = 'Select Year' }) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!wrapRef.current || wrapRef.current.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, []);

  return (
    <div className="mb-5 w-full lg:w-[45%]">
      {label && <label className="block text-white text-lg mb-1">{label}</label>}
      {/* Mobile custom (hidden on lg) */}
      <div ref={wrapRef} className="relative block lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          className={`w-full text-left bg-transparent !border-0 !border-b-2 !rounded-none p-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#4d55ba] !border-gray-400 flex justify-between items-center`}
        >
          <span>{value || placeholder}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <ul className="absolute left-0 top-full mt-1 w-full max-h-44 overflow-auto rounded-md bg-[#111] border border-gray-700 shadow-lg z-20">
            {options.map(opt => (
              <li
                key={opt}
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`px-3 py-2 text-sm cursor-pointer hover:bg-[#222] ${
                  opt === value ? 'text-[#4d55ba] font-semibold' : 'text-gray-200'
                }`}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
        {error && (
          <div className="mt-1 px-1 flex items-center text-red-400 text-xs">
            <AlertCircle className="w-3.5 h-3.5 mr-1" />
            <p>{error}</p>
          </div>
        )}
      </div>
      {/* Desktop native select */}
      <div className="hidden lg:block">
        <select
          className="w-full bg-transparent !border-0 !border-b-2 !border-gray-400 !rounded-none mt-1 p-2 text-white focus:border-[#4d55ba] focus:outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" className="text-black">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option} className="text-black">
              {option}
            </option>
          ))}
        </select>
        {error && (
          <div className="mt-1 px-1 flex items-center text-red-400 text-xs">
            <AlertCircle className="w-3.5 h-3.5 mr-1" />
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const STEP_MIN_HEIGHT = 380; // further reduced to pull buttons higher

export default function Application() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    lib_id: '',
    year: '',
    branch: '',
    domains: [],
    preferredDomain1: '',
    preferredDomain2: '',
    reason1: '',
    reason2: '',
    whyEcell: '',
    linkedIn: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = null;

  const showToast = useCallback((message, type) => {
    setToast({ message, type });
  }, []);
  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  const validateStep = (step) => {
    const trimVal = (v) => (typeof v === 'string' ? v.trim() : v);
    const newErrors = {};
    switch (step) {
      case 1: {
        const basicFields = ['name', 'email', 'phone', 'lib_id', 'year', 'branch'];
        basicFields.forEach((field) => {
          if (!trimVal(formData[field])) newErrors[field] = 'This field is required';
        });
        if (trimVal(formData.email) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
          newErrors.email = 'Please enter a valid email address';
        }
        if (trimVal(formData.phone) && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
          newErrors.phone = 'Please enter a valid 10-digit phone number';
        }
        break;
      }
      case 2: {
        const domainFields = ['whyEcell', 'preferredDomain1', 'preferredDomain2', 'reason1', 'reason2'];
        domainFields.forEach((field) => {
          if (!trimVal(formData[field])) newErrors[field] = 'This field is required';
        });
        if (formData.preferredDomain1 === formData.preferredDomain2) {
          newErrors.preferredDomain2 = 'Please select a different domain';
        }
        break;
      }
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = useCallback(
    (field, value) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: '' }));
      }
    },
    [errors]
  );

  const API_BASE_URL = 'https://rec-backend-z2qa.onrender.com';

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validateStep(2)) {
        showToast('Please fill in all required fields correctly', 'error');
        return;
      }
      setIsSubmitting(true);
      try {
        const yearMap = { '1st Year': 1, '2nd Year': 2 };
        const submitData = {
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: Number(formData.phone.replace(/\D/g, '')),
          year: yearMap[formData.year],
          lib_id: formData.lib_id.trim().toUpperCase(),
          branch: formData.branch,
          why_ecell: formData.whyEcell.trim(),
          linkedIn: formData.linkedIn.startsWith('http') ? formData.linkedIn.trim() : 'https://linkedin.com/in/none',
          domains: [formData.preferredDomain1, formData.preferredDomain2],
          groupNumber: 0,
          domain_pref_one: {
            name: formData.preferredDomain1,
            reason: formData.reason1.trim(),
          },
          domain_pref_two: {
            name: formData.preferredDomain2,
            reason: formData.reason2.trim(),
          },
        };
        // Remove custom headers and add timeout to avoid hanging requests
        await axios.post(`${API_BASE_URL}/api/users`, submitData, { timeout: 15000 });
        showToast('Application submitted successfully!', 'success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          lib_id: '',
          year: '',
          branch: '',
          domains: [],
          preferredDomain1: '',
          preferredDomain2: '',
          reason1: '',
          reason2: '',
          whyEcell: '',
          linkedIn: '',
        });
        setErrors({});
        setCurrentStep(3);
      } catch (error) {
        const isCorsOrNetwork = !error.response && error.request;
        const errorMessage = isCorsOrNetwork
          ? 'Network/CORS error — request blocked or timed out'
          : (error.response?.data?.message || error.message);
        console.error('Submission failed:', error);
        showToast(`Error: ${errorMessage}`, 'error');
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validateStep, showToast]
  );

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    } else {
      showToast('Please fill all required fields correctly', 'error');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const steps = [
    { key: 1, label: "Basic Details" },
    { key: 2, label: "Domain Preferences" },
    { key: 3, label: "Submitted" },
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="w-full text-lg lg:flex lg:flex-col lg:justify-center lg:items-center flex flex-col  items-center justify-center">
            <div className="flex flex-col lg:flex-row lg:justify-between w-[90%] lg:w-full gap-4">
              <InputField
                placeholder="Full Name"
                value={formData.name}
                onChange={(value) => handleInputChange('name', value)}
                required={true}
                error={errors.name}
                label="Full Name:"
              />
              <InputField
                placeholder="E-mail"
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
                type="email"
                required={true}
                error={errors.email}
                label="E-mail:"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between w-[90%] lg:w-full gap-4">
              <InputField
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(value) => handleInputChange('phone', value)}
                required={true}
                error={errors.phone}
                label="Phone Number:"
              />
              <InputField
                placeholder="Library ID (2529ITXYZ)"
                value={formData.lib_id}
                onChange={(value) => handleInputChange('lib_id', value)}
                required={true}
                error={errors.lib_id}
                label="Library ID:"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between w-[90%] lg:w-full gap-4">
              <YearSelect
                label="Year:"
                value={formData.year}
                onChange={(value) => handleInputChange('year', value)}
                options={yearOptions}
                error={errors.year}
              />
              <CustomSelect
                placeholder="Select Branch"
                value={formData.branch}
                onChange={(value) => handleInputChange('branch', value)}
                options={branchOptions}
                required={true}
                error={errors.branch}
                label="Branch:"
              />
            </div>
            <div className="w-[90%] lg:w-full">
              <InputField
                placeholder="LinkedIn Profile URL"
                value={formData.linkedIn}
                onChange={(value) => handleInputChange('linkedIn', value)}
                required={false}
                error={errors.linkedIn}
                label="LinkedIn Profile:"
                fullWidth={true}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="w-full text-lg lg:flex lg:flex-col lg:justify-center lg:items-center flex flex-col items-center justify-center">
            <div className="flex flex-col lg:flex-row lg:justify-between w-[90%] lg:w-full gap-4">
              <CustomSelect
                placeholder="Select Domain"
                value={formData.preferredDomain1}
                onChange={(value) => handleInputChange('preferredDomain1', value)}
                options={domainOptions}
                required={true}
                error={errors.preferredDomain1}
                label="Preferred Domain One:"
              />
              <CustomSelect
                placeholder="Select Domain"
                value={formData.preferredDomain2}
                onChange={(value) => handleInputChange('preferredDomain2', value)}
                options={domainOptions}
                required={true}
                error={errors.preferredDomain2}
                label="Preferred Domain Two:"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between w-[90%] lg:w-full  gap-4">
              <div className="w-full lg:w-[45%]">
                <TextAreaField
                  placeholder="Why do you prefer this domain?"
                  value={formData.reason1}
                  onChange={(value) => handleInputChange('reason1', value)}
                  required={true}
                  error={errors.reason1}
                  className="h-12 p-2"
                  label="Reason for Domain One:"
                />
              </div>
              <div className="w-full lg:w-[45%]">
                <TextAreaField
                  placeholder="Why do you prefer this domain?"
                  value={formData.reason2}
                  onChange={(value) => handleInputChange('reason2', value)}
                  required={true}
                  error={errors.reason2}
                  className="h-12 p-2"
                  label="Reason for Domain Two:"
                />
              </div>
            </div>
            <div className="w-[90%] lg:w-full">
              <TextAreaField
                placeholder="Tell us why you want to join E-Cell..."
                value={formData.whyEcell}
                onChange={(value) => handleInputChange('whyEcell', value)}
                required={true}
                error={errors.whyEcell}
                className="h-12"
                label="Why E-Cell:"
              />
            </div>
          </div>
        );

      case 3:
        // REPLACED compact thank-you with accepted full submitted UI
        return (
          <div className="w-full flex flex-col items-center justify-center py-10">
            <div className="w-[90%] lg:w-full max-w-3xl mx-auto p-6 sm:p-8 rounded-xl shadow-2xl bg-[#1C1C1E]/40 backdrop-blur-md border border-gray-800">
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center tracking-tight bg-gradient-to-r from-[#4E55BA] to-[#6C63FF] text-transparent bg-clip-text">
                Your form has been submitted
              </h1>
              <p className="text-gray-300 text-center mb-6">
                Thanks for applying. The team will review your application and get back to you soon.
              </p>
              <div className="flex flex-col items-center gap-3 mb-6">
                <a
                  href="/downloads/app.apk"
                  download
                  className="px-6 py-2 rounded-md border border-[#4D55BA] text-[#4D55BA] hover:bg-[#4D55BA] hover:text-white transition-colors text-sm font-medium"
                >
                  Download APK
                </a>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .no-horizontal-scrollbar::-webkit-scrollbar { display: none; }
      .no-horizontal-scrollbar { scrollbar-width: none; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const domainOptions = useMemo(() => ['Technical', 'Public Relations', 'Corporate Relations', 'Events', 'Graphics'], []);

  const yearOptions = useMemo(() => ['1st Year', '2nd Year'], []);

  const branchOptions = useMemo(
    () => [
      'CS',
      'IT',
      'mechanical',
      'EEE',
      'ECE',
      'VLSI',
      'CSE(Cyber Security)',
      'ELCE',
      'CSE(DS)',
      'CSIT',
      'CSE(AIML)',
      'CSE(AI)',
      'CSE',
    ],
    []
  );

  return (
    <div className="form-container !pt-[15vh] flex flex-col lg:flex-row items-center text-white min-h-[100vh] bg-black">
      {toast && <Toast message={toast.message} type={toast.type} onClose={hideToast} />}
      
      <div className="w-[90%] lg:w-[50%] flex items-center lg:ml-8">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="z-[1] lg:flex lg:w-full opacity-90"
        />
      </div>
      
      <div className="flex flex-col items-center w-full lg:w-[80%]">
        <div>
          <h2 className="text-3xl md:text-4xl text-center font-bold text-white">
            Application <span className="text-[#4d55ba]">Form</span>
          </h2>
        </div>
        
        <div className="w-[70%] lg:w-[60%] mt-8">
          <AnimatedProgress currentStep={currentStep} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center overflow-hidden mt-8 lg:!w-[70%] mb-0 lg:mb-10 w-full text-white"
        >
          {/* Replaced multiple conditional wrappers with single fixed-height container */}
          <div
            className="w-full flex justify-center items-start"
            style={{ minHeight: STEP_MIN_HEIGHT }}
          >
            {renderStep()}
          </div>

          <div
            className={`w-[80%] flex ${
              currentStep === 1 ? 'justify-center' : 'justify-between'
            } text-lg mt-1 mb-6 md:mb-6 lg:mb-2`}
          >
            <button
              onClick={prevStep}
              className={`${
                currentStep === 1 || currentStep === 3 ? 'hidden' : ''
              } btn w-[80%] rounded-lg py-2 mt-3 cursor-pointer text-center mr-5 text-white border border-gray-600`}
              type="button"
            >
              Previous
            </button>

            {currentStep === 1 || currentStep === 2 ? (
              <button
                // rely on form submit; do not call handleSubmit here
                onClick={currentStep === 2 ? undefined : nextStep}
                type={currentStep === 2 ? 'submit' : 'button'}
                disabled={isSubmitting}
                className="btn w-[80%] rounded-lg py-2 mt-3 cursor-pointer text-center text-black dark:text-white border border-[#4d55ba] bg-white dark:bg-transparent"
              >
                {isSubmitting ? <LoadingSpinner /> : currentStep === 2 ? 'Submit' : 'Next'}
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
