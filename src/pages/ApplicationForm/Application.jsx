import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import {
  ChevronDown,
  AlertCircle,
  Check,
} from 'lucide-react';
import axios from 'axios';
import Lottie from 'lottie-react';
import animationData from '../../assets/ApplicationForm/data.json';

// New compact animated progress (same sizing)
const AnimatedProgress = ({ currentStep }) => {
  const steps = [
    { id: 1, name: 'Basic Details' },
    { id: 2, name: 'Personal Details' },
    { id: 3, name: 'Recruitment Details' },
    { id: 4, name: 'Final Submit' }
  ];
  const progressPct = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="w-full mb-8 ">
      <div className="relative flex justify-between lg:ml-25 lg:mr-25 items-center">
        {/* Thinner base line */}
        <div className="absolute top-4 left-6 right-6 h-px bg-black dark:bg-white rounded-full z-0"></div>

        {/* Thinner animated fill line (no circle) */}
        <div
          className="absolute top-4 left-6 h-px bg-[#4d55ba] rounded-full z-0 transition-all duration-700 ease-in-out"
          style={{ width: `calc((100% - 3rem) * ${progressPct / 100})` }}
        />

        {/* Step circles */}
        {steps.map(step => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id || (isActive && step.id === steps.length);
          const nameParts = step.name.split(' ');

          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300
                  ${isCompleted
                    ? 'bg-[#1976D2] text-white shadow-md'
                    : isActive
                      ? 'bg-[#1976D2] text-white shadow'
                      : 'bg-black dark:bg-white text-gray-200 dark:text-gray-800'
                  }`}
              >
                {isCompleted ? <Check className="w-4 h-4" strokeWidth={3} /> : step.id}
              </div>
              <span className={`mt-2 text-[10px] sm:text-xs font-medium ${
                (isActive || isCompleted) ? 'text-black dark:text-white' : 'text-gray-400'
              }`}>
                {nameParts.length > 1 ? (
                  <>
                    <span className="block">{nameParts[0]}</span>
                    <span className="block">{nameParts.slice(1).join(' ')}</span>
                  </>
                ) : (
                  step.name
                )}
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
    {label && <label className="block text-black dark:text-white text-lg mb-1">{label}</label>}
    <input
      className="w-full bg-transparent !border-0 !border-b-2 !border-b-[#646464] dark:!border-b-white !rounded-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 p-2 focus:border-[#4d55ba] focus:outline-none"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        // Special handling for phone number input
        if (type === 'tel') {
          const numericValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
          if (numericValue.length <= 10) { // Limit to 10 digits
            onChange(numericValue);
          }
        } else {
          onChange(e.target.value);
        }
      }}
      autoComplete="off"
      maxLength={type === 'tel' ? 10 : undefined}
    />
    {error && (
      <div className="mt-1 px-1 flex items-center text-red-400 text-xs">
        <AlertCircle className="w-3.5 h-3.5 mr-1" />
        <p>{error}</p>
      </div>
    )}
  </div>
));

const TextAreaField = React.memo(({ placeholder, value, onChange, required = false, error, className = '', label }) => (
  <div className="mb-2 w-full">
    {label && <label className="block text-black dark:text-white text-lg mb-1">{label}</label>}
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
        `w-full bg-transparent !border-0 !border-b-2 !border-b-[#646464] dark:!border-b-white !rounded-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 p-2 resize-none focus:border-[#4d55ba] focus:outline-none
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

const CustomSelect = React.memo(({ placeholder, value, onChange, options = [], required = false, error, label, isLastField = false }) => {
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
    <div className="mb-5 w-full lg:w-[45%] relative" ref={wrapRef}>
      {label && <label className="block text-black dark:text-white text-lg mb-1">{label}</label>}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`w-full text-left bg-transparent !border-0 !border-b-2 !rounded-none p-2 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#4d55ba] !border-b-[#646464] dark:!border-b-white flex justify-between items-center`}
      >
        <span>{value || placeholder}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className={`absolute left-0 ${isLastField ? 'bottom-full mb-1' : 'top-full mt-1'} w-full max-h-44 overflow-auto rounded-md bg-white dark:bg-[#111] border border-gray-300 dark:border-gray-700 shadow-lg z-20 scrollbar-hide`}>
          {options.map(opt => (
            <li
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-[#222] ${
                opt === value ? 'text-[#4d55ba] font-semibold' : 'text-black dark:text-gray-200'
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
  );
});

const RadioField = React.memo(({ options, value, onChange, label }) => (
  <div className="mb-5 w-[90%] lg:w-full">
    <label className="block text-black dark:text-white text-lg mb-3">{label}</label>
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
          <span className="text-black dark:text-white">{option}</span>
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
    <div className="mb-5 w-full lg:w-[45%] relative" ref={wrapRef}>
      {label && <label className="block text-black dark:text-white text-lg mb-1">{label}</label>}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`w-full text-left bg-transparent !border-0 !border-b-2 !rounded-none p-2 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#4d55ba] !border-b-[#646464] dark:!border-b-white flex justify-between items-center`}
      >
        <span>{value || placeholder}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className="absolute left-0 top-full mt-1 w-full max-h-44 overflow-auto rounded-md bg-white dark:bg-[#111] border border-gray-300 dark:border-gray-700 shadow-lg z-20 scrollbar-hide">
          {options.map(opt => (
            <li
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-[#222] ${
                opt === value ? 'text-[#4d55ba] font-semibold' : 'text-black dark:text-gray-200'
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
  );
};

const STEP_MIN_HEIGHT = 380; // further reduced to pull buttons higher

export default function Application() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    lib_id: '',
    year: '',
    course: '',
    branch: '',
    personalEmail: '',
    phone: '',
    gender: '',
    residence: '',
    achievements: '',
    linkedIn: '',
    motivation: '',
    whyEcell: '',
    preferredDomain1: '',
    preferredDomain2: '',
    domain1Reason: '',
    domain2Reason: '',
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
        const basicFields = ['name', 'email', 'lib_id', 'year', 'course', 'branch'];
        basicFields.forEach((field) => {
          if (!trimVal(formData[field])) newErrors[field] = 'This field is required';
        });
        if (trimVal(formData.email)) {
          const email = formData.email.trim();
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
          } else if (!email.toLowerCase().endsWith('@kiet.edu')) {
            newErrors.email = 'Please use your KIET college email (@kiet.edu)';
          }
        }
        break;
      }
      case 2: {
        const personalFields = ['personalEmail', 'phone', 'gender', 'residence'];
        personalFields.forEach((field) => {
          if (!trimVal(formData[field])) newErrors[field] = 'This field is required';
        });
        if (trimVal(formData.personalEmail)) {
          const personalEmail = formData.personalEmail.trim();
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalEmail)) {
            newErrors.personalEmail = 'Please enter a valid email address';
          } else if (!personalEmail.toLowerCase().endsWith('@gmail.com')) {
            newErrors.personalEmail = 'Please use a Gmail address (@gmail.com)';
          }
        }
        if (trimVal(formData.phone) && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
          newErrors.phone = 'Please enter a valid 10-digit phone number';
        }
        // LinkedIn URL validation (optional field)
        if (trimVal(formData.linkedIn)) {
          const linkedInUrl = formData.linkedIn.trim();
          if (!linkedInUrl.toLowerCase().includes('linkedin.com')) {
            newErrors.linkedIn = 'Please enter a valid LinkedIn profile URL';
          }
        }
        break;
      }
      case 3: {
        const recruitmentFields = ['motivation', 'whyEcell', 'preferredDomain1', 'preferredDomain2', 'domain1Reason', 'domain2Reason'];
        recruitmentFields.forEach((field) => {
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

  const API_BASE_URL = 'https://ecellrecruits.shdevsolutions.com';

  const sendConfirmationEmail = async (applicantName, applicantEmail) => {
    try {
      const payload = {
        subject: "Your Application Has Been Successfully Received | E-Cell KIET",
        emails: [applicantEmail],
        body: `<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>E-Cell KIET Application Confirmation</title>\n  </head>\n  <body style=\"margin:0; padding:0; background-color:#f3f4f6; font-family:'Segoe UI', Arial, sans-serif; color:#333;\">\n    <table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"padding:20px 0;\">\n      <tr>\n        <td align=\"center\">\n          <table cellpadding=\"0\" cellspacing=\"0\" width=\"600\" style=\"max-width:600px; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 6px 20px rgba(0,0,0,0.08);\">\n            \n            <!-- Header Banner -->\n            <tr>\n              <td align=\"center\" style=\"background:linear-gradient(90deg,#4b39ef,#6d4aff); padding:24px;\">\n                <h1 style=\"margin:0; font-size:22px; color:#ffffff; font-weight:600;\">E-Cell KIET</h1>\n              </td>\n            </tr>\n\n            <!-- Body -->\n            <tr>\n              <td style=\"padding:28px 24px 20px 24px; font-size:15px; line-height:1.7; color:#444;\">\n                <p style=\"margin:0 0 16px 0;\">Dear {{name[0]}},</p>\n                <p style=\"margin:0 0 16px 0;\">Thank you for submitting your application to <strong>E-Cell KIET</strong>. We’ve received your details and will be reviewing them shortly.</p>\n                <p style=\"margin:0 0 16px 0;\">We’re glad about your interest in joining us and will keep you updated with the next steps soon.</p>\n                <p style=\"margin:0 0 12px 0;\">To stay connected and get all the latest updates directly on your phone, we encourage you to download our official app:</p>\n              </td>\n            </tr>\n\n            <!-- Button -->\n            <tr>\n              <td align=\"center\" style=\"padding:0 0 28px 0;\">\n                <a href=\"https://play.google.com/store/apps/details?id=com.devshiv.ecellapp\" \n                   target=\"_blank\" \n                   style=\"background:linear-gradient(90deg,#4b39ef,#6d4aff); color:#ffffff; text-decoration:none; padding:12px 28px; border-radius:50px; font-weight:600; font-size:15px; display:inline-block; box-shadow:0 4px 10px rgba(75,57,239,0.25);\">\n                  📲 Download the E-Cell KIET App\n                </a>\n              </td>\n            </tr>\n\n            <!-- Footer -->\n            <tr>\n              <td style=\"padding:0 24px 24px 24px; font-size:13px; line-height:1.6; color:#666;\">\n                <p style=\"margin:0;\">Sincerely,</p>\n                <p style=\"margin:0; font-weight:600; color:#333;\">Team E-Cell KIET</p>\n              </td>\n            </tr>\n\n          </table>\n        </td>\n      </tr>\n    </table>\n  </body>\n</html>\n`,
        custom: {
          name: [applicantName],
          email: [applicantEmail],
        },
      };
      await axios.post(`${API_BASE_URL}/api/emails/send`, payload);
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
    }
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validateStep(3)) {
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
          course: formData.course,
          branch: formData.branch,
          gender: formData.gender,
          personal_email: formData.personalEmail.trim().toLowerCase(),
          why_ecell: formData.whyEcell.trim(),
          what_motivates_you: formData.motivation.trim(),
          linkedIn: formData.linkedIn.trim() ? 
            (formData.linkedIn.startsWith('http') ? formData.linkedIn.trim() : `https://${formData.linkedIn.trim()}`) : 
            'https://linkedin.com/',
          domains: [formData.preferredDomain1, formData.preferredDomain2],
          isHosteller: formData.residence === 'Hosteller',
          pastAchievement: formData.achievements.trim(),
          domain_pref_one: {
            name: formData.preferredDomain1,
            reason: formData.domain1Reason.trim()
          },
          domain_pref_two: {
            name: formData.preferredDomain2,
            reason: formData.domain2Reason.trim()
          }
        };

        await axios.post(`${API_BASE_URL}/api/users`, submitData, { timeout: 15000 });
        
        // Send confirmation email to college email
        await sendConfirmationEmail(formData.name.trim(), formData.email.trim().toLowerCase());
        
        // Reset form data
        setFormData({
          name: '',
          email: '',
          lib_id: '',
          year: '',
          course: '',
          branch: '',
          personalEmail: '',
          phone: '',
          gender: '',
          residence: '',
          achievements: '',
          linkedIn: '',
          motivation: '',
          whyEcell: '',
          preferredDomain1: '',
          preferredDomain2: '',
          domain1Reason: '',
          domain2Reason: '',
        });
        setErrors({});
        
        // Show success message and navigate to success page
        showToast('Application submitted successfully!', 'success');
        setCurrentStep(4);
      } catch (error) {
        const isCorsOrNetwork = !error.response && error.request;
        let errorMessage;
        
        if (isCorsOrNetwork) {
          errorMessage = 'Network/CORS error — request blocked or timed out';
        } else if (error.response?.status === 400 || error.response?.status === 409) {
          const responseData = error.response?.data || {};
          const responseDetail = responseData.detail || '';
          const responseMessage = responseData.message || '';
          const combinedMessage = responseDetail || responseMessage;
          
          if (combinedMessage.toLowerCase().includes('email') && 
              combinedMessage.toLowerCase().includes('already exists')) {
            errorMessage = ' email already registered';
          } else if (combinedMessage.toLowerCase().includes('duplicate') || 
                     combinedMessage.toLowerCase().includes('already')) {
            errorMessage = 'User already exists. Please check your information.';
          } else {
            errorMessage = combinedMessage || 'Invalid data submitted. Please check your information.';
          }
        } else {
          errorMessage = error.response?.data?.detail || error.response?.data?.message || error.message || 'An unexpected error occurred';
        }
        
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
              <CustomSelect
                placeholder="Select Course"
                value={formData.course}
                onChange={(value) => handleInputChange('course', value)}
                options={courseOptions}
                required={true}
                error={errors.course}
                label="Course:"
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
            <div className="flex flex-col lg:flex-row lg:justify-between w-[90%] lg:w-full gap-4">
              <InputField
                placeholder="College E-mail"
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
                type="email"
                required={true}
                error={errors.email}
                label="College E-mail:"
              />
              <InputField
                placeholder="202501100100092"
                value={formData.lib_id}
                onChange={(value) => handleInputChange('lib_id', value)}
                required={true}
                error={errors.lib_id}
                label="Registration No./Library Id:"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="w-full text-lg lg:flex lg:flex-col lg:justify-center lg:items-center flex flex-col items-center justify-center">
            <div className="flex flex-col lg:flex-row lg:justify-between w-[90%] lg:w-full gap-4">
              <InputField
                placeholder="Personal E-mail"
                value={formData.personalEmail}
                onChange={(value) => handleInputChange('personalEmail', value)}
                type="email"
                required={true}
                error={errors.personalEmail}
                label="Personal E-mail:"
              />
              <InputField
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(value) => handleInputChange('phone', value)}
                type="tel"
                required={true}
                error={errors.phone}
                label="Phone Number:"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between w-[90%] lg:w-full gap-4">
              <CustomSelect
                placeholder="Select Gender"
                value={formData.gender}
                onChange={(value) => handleInputChange('gender', value)}
                options={genderOptions}
                required={true}
                error={errors.gender}
                label="Gender:"
              />
              <CustomSelect
                placeholder="Select Residence"
                value={formData.residence}
                onChange={(value) => handleInputChange('residence', value)}
                options={residenceOptions}
                required={true}
                error={errors.residence}
                label="Residence:"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between w-[90%] lg:w-full gap-4">
              <TextAreaField
                placeholder="Personal Achievements / Past experiences (optional)"
                value={formData.achievements}
                onChange={(value) => handleInputChange('achievements', value)}
                required={false}
                error={errors.achievements}
                label="Achievements: (Optional)"
                className="h-12"
              />
            </div>
            <div className="w-[90%] lg:w-full">
              <InputField
                placeholder="LinkedIn Profile URL (e.g., https://www.linkedin.com/in/yourname)"
                value={formData.linkedIn}
                onChange={(value) => handleInputChange('linkedIn', value)}
                required={false}
                error={errors.linkedIn}
                label="LinkedIn Profile: (Optional)"
                fullWidth={true}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="w-full text-lg lg:flex lg:flex-col lg:justify-center lg:items-center flex flex-col items-center justify-center">
            <div className="w-[90%] lg:w-full">
              <TextAreaField
                placeholder="What motivates your interest in entrepreneurship and the startup ecosystem?"
                value={formData.motivation}
                onChange={(value) => handleInputChange('motivation', value)}
                required={true}
                error={errors.motivation}
                className="h-12"
                label="Motivation for Entrepreneurship:"
              />
            </div>
            <div className="w-[90%] lg:w-full">
              <TextAreaField
                placeholder="Why do you wish to be a part of the E-Cell?"
                value={formData.whyEcell}
                onChange={(value) => handleInputChange('whyEcell', value)}
                required={true}
                error={errors.whyEcell}
                className="h-12"
                label="Why E-Cell:"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between w-[90%] lg:w-full gap-4">
              <CustomSelect
                placeholder="Select Domain 1"
                value={formData.preferredDomain1}
                onChange={(value) => handleInputChange('preferredDomain1', value)}
                options={domainOptions}
                required={true}
                error={errors.preferredDomain1}
                label="Preferred Domain 1:"
                isLastField={true}
              />
              <CustomSelect
                placeholder="Select Domain 2"
                value={formData.preferredDomain2}
                onChange={(value) => handleInputChange('preferredDomain2', value)}
                options={domainOptions}
                required={true}
                error={errors.preferredDomain2}
                label="Preferred Domain 2:"
                isLastField={true}
              />
            </div>
            <div className="w-[90%] lg:w-full">
              <TextAreaField
                placeholder="Why do you want to join this domain? (Domain 1)"
                value={formData.domain1Reason}
                onChange={(value) => handleInputChange('domain1Reason', value)}
                required={true}
                error={errors.domain1Reason}
                className="h-12"
                label="Domain 1 Reason:"
              />
            </div>
            <div className="w-[90%] lg:w-full">
              <TextAreaField
                placeholder="Why do you want to join this domain? (Domain 2)"
                value={formData.domain2Reason}
                onChange={(value) => handleInputChange('domain2Reason', value)}
                required={true}
                error={errors.domain2Reason}
                className="h-12"
                label="Domain 2 Reason:"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="w-full flex flex-col items-center justify-center py-10">
            <div className="w-[90%] lg:w-full max-w-3xl mx-auto p-6 sm:p-8 rounded-xl shadow-2xl bg-gray-100 dark:bg-[#1C1C1E]/40 backdrop-blur-md border border-gray-300 dark:border-gray-800">
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center tracking-tight bg-gradient-to-r from-[#4E55BA] to-[#6C63FF] text-transparent bg-clip-text">
                Your form has been submitted
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                Thanks for applying. The team will review your application and get back to you soon.
              </p>
              <div className="flex flex-col items-center gap-3 mb-6">
                <a
                  href="https://play.google.com/store/apps/details?id=com.devshiv.ecellapp"
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
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const domainOptions = useMemo(() => ['Corporate Relations', 'Graphics', 'Public Relations', 'Events', 'Technical'], []);

  const yearOptions = useMemo(() => ['1st Year', '2nd Year'], []);

  const courseOptions = useMemo(() => ['B-Tech', 'B-Pharma', 'MBA', 'MCA'], []);

  const genderOptions = useMemo(() => ['Male', 'Female'], []);

  const residenceOptions = useMemo(() => ['Hosteller', 'Day Scholar / PG'], []);

  const branchOptions = useMemo(
    () => [
      'CSE',
      'IT',
      'CSIT',
      'CS',
      'CSE-AI',
      'CSE-AIML',
      'ECE',
      'ELCE',
      'EEE',
      'ME',
      'CSE - Cyber Security',
      'CSE - Data Science',
      'ECE - VLSI',
      'Advanced Mechatronics and Industrial Automation (AMIA)',
      'Other'
    ],
    []
  );

  return (
    <div className="form-container !pt-[15vh] flex flex-col lg:flex-row items-center text-black dark:text-white min-h-[100vh] bg-white dark:bg-black">
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
          <h2 className="text-3xl md:text-4xl text-center font-bold text-black dark:text-white">
            Application <span className="text-[#4d55ba]">Form</span>
          </h2>
        </div>
        
        <div className="w-[70%] lg:w-[60%] mt-8">
          <AnimatedProgress currentStep={currentStep} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center overflow-hidden mt-8 lg:!w-[70%] mb-0 lg:mb-10 w-full text-black dark:text-white"
        >
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
                currentStep === 1 || currentStep === 4 ? 'hidden' : ''
              } btn w-[80%] rounded-lg py-2 mt-3 cursor-pointer text-center mr-5 text-black dark:text-white border border-gray-600`}
              type="button"
            >
              Previous
            </button>

            {currentStep < 3 ? (
              <button
                onClick={nextStep}
                type="button"
                className="btn w-[80%] rounded-lg py-2 mt-3 cursor-pointer text-center text-black dark:text-white border border-[#4d55ba] bg-white dark:bg-transparent"
              >
                Next
              </button>
            ) : currentStep === 3 ? (
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn w-[80%] rounded-lg py-2 mt-3 cursor-pointer text-center text-black dark:text-white border border-[#4d55ba] bg-white dark:bg-transparent"
              >
                {isSubmitting ? <LoadingSpinner /> : 'Submit'}
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
