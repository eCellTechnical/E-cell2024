import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    name: ""
  });
  const [validUserName, setValidUserName] = useState(0);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [disable, setDisable] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const checkUsername = async () => {
      if (formData.name.length < 3) {
        setValidUserName(0);
        return;
      }
      
      setIsChecking(true);
      try {
        const res = await axios.post(
          `http://localhost:5000/api/v1/search-username`,
          { name: formData.name }
        );
        setValidUserName(res.data.msg === "Not Taken" ? 1 : 0);
      } catch (error) {
        console.error("Error checking username:", error);
        setValidUserName(0);
      } finally {
        setIsChecking(false);
      }
    };

    const timer = setTimeout(checkUsername, 1000);
    return () => clearTimeout(timer);
  }, [formData.name]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'phone' ? value.replace(/\D/g, '') : value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setDisable(true);

    if (validUserName === 0) {
      setDisable(false);
      return toast.warn("Please choose a valid username", {
        position: "top-center",
        theme: "colored",
      });
    }
    
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/register`, 
        {
          ...formData,
          isAdmin: false,
          isSuperAdmin: false,
          kitTaken: false,
          profilePicture: "",
        }
      );

      if (response.data.success) {
        toast.success("OTP sent to your email. Please verify.", {
          position: "top-center",
          theme: "colored",
        });
        navigate("/verify-otp", { state: { email: formData.email } });
      } else {
        toast.error(response.data.message || "Registration failed");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Network error. Please try again later";
      toast.error(errorMsg);
    }
    setDisable(false);
  }

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className=" bg-gradient-to-br from-black to-gray-900 flex items-center md:pb-16 justify-center pt-16 md:pt-28 md:p-28">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 shadow-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600 mb-2">
            Create Account
          </h1>
          <p className="text-gray-400">Register for Endevour Fast</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800 border ${
                  formData.name.length > 0 
                    ? validUserName === 1 
                      ? "border-emerald-500" 
                      : "border-red-500"
                    : "border-gray-700"
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent`}
                placeholder="Anant Mittal"
                minLength={3}
                maxLength={50}
                required
              />
              {isChecking && formData.name.length >= 3 && (
                <div className="absolute right-3 top-3.5">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-emerald-500"></div>
                </div>
              )}
              {!isChecking && formData.name.length >= 3 && validUserName === 1 && (
                <div className="absolute right-3 top-3.5 text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              {!isChecking && formData.name.length >= 3 && validUserName === 0 && (
                <div className="absolute right-3 top-3.5 text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            {formData.name.length >= 3 && !isChecking && validUserName === 0 && (
              <p className="mt-1 text-xs text-red-500">Username is already taken</p>
            )}
            {formData.name.length >= 3 && !isChecking && validUserName === 1 && (
              <p className="mt-1 text-xs text-emerald-500">Username is available</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="anant2428cs1587@kiet.edu"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={passwordVisibility ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="••••••••"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}"
                title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 and at most 15 characters"
                required
              />
              <button
                type="button"
                onClick={() => setPasswordVisibility(!passwordVisibility)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm font-medium text-gray-400 hover:text-gray-300"
              >
                {passwordVisibility ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              8-15 characters with uppercase, lowercase, and number
            </p>
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="+91 9876543210"
              pattern="[6-9]{1}[0-9]{9}"
              maxLength={10}
              required
            />
            <p className="mt-1 text-xs text-gray-500">10 digit Indian phone number</p>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={disable || validUserName === 0}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-bold text-white ${
                disable || validUserName === 0
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200`}
            >
              {disable ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link
            to="/endeavour/login"
            className="font-medium text-emerald-400 hover:text-emerald-300"
          >
            Sign in
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-radial from-emerald-500/10 via-transparent to-transparent animate-spin-slow"></div>
        </div>
      </div>
    </div>
  );
}

export default Register;