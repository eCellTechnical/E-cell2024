// src/contexts/AuthContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Create context
const AuthContext = createContext(null);

// Token refresh timer - set to refresh 5 minutes before expiration
const REFRESH_TIME_BEFORE_EXPIRY = 5 * 60 * 1000; // 5 minutes in milliseconds

// Create Auth Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Parse JWT to get expiration time
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  // Set up axios defaults
  useEffect(() => {
    axios.defaults.withCredentials = true;
    
    // Add interceptor to add auth token to requests
    const interceptor = axios.interceptors.request.use(
      config => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      error => Promise.reject(error)
    );
    
    return () => {
      // Clean up interceptor on unmount
      axios.interceptors.request.eject(interceptor);
    };
  }, []);

  // Initial authentication check
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
          return;
        }
        
        // Check if token is expired
        const decodedToken = parseJwt(token);
        if (!decodedToken) {
          handleLogout();
          return;
        }
        
        const expiryTime = decodedToken.exp * 1000; // Convert to milliseconds
        const currentTime = Date.now();
        
        if (currentTime >= expiryTime) {
          // Token expired, try to refresh
          await refreshToken();
        } else {
          // Token valid, set up automatic refresh
          const timeUntilRefresh = expiryTime - currentTime - REFRESH_TIME_BEFORE_EXPIRY;
          setupTokenRefresh(timeUntilRefresh);
          
          // Load user data using the token
          await loadUserData();
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        handleLogout();
      } finally {
        setLoading(false);
      }
    };
    
    checkAuthStatus();
  }, []);

  // Setup timer to refresh token before it expires
  const setupTokenRefresh = (timeUntilRefresh) => {
    if (timeUntilRefresh <= 0) {
      refreshToken();
      return;
    }
    
    const refreshTimer = setTimeout(() => {
      refreshToken();
    }, timeUntilRefresh);
    
    return () => clearTimeout(refreshTimer);
  };

  // Load user data from server
  const loadUserData = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) return;
      
      const response = await axios.get(`https://two5-backend.onrender.com/api/v1/users/${userId}`);
      
      if (response.data.success) {
        setUser(response.data.data.user);
        setIsAuthenticated(true);
      } else {
        handleLogout();
      }
    } catch (error) {
      console.error("Failed to load user data:", error);
      if (error.response?.status === 401) {
        handleLogout();
      }
    }
  };

  // Refresh token function
  const refreshToken = async () => {
    try {
      const response = await axios.post('https://two5-backend.onrender.com/api/v1/refresh-token');
      
      if (response.data.success) {
        const { token, user: userData } = response.data.data;
        
        // Update local storage with new token
        localStorage.setItem('token', token);
        if (userData?.id) {
          localStorage.setItem('userId', userData.id);
        }
        
        // Set up next refresh
        const decodedToken = parseJwt(token);
        if (decodedToken) {
          const expiryTime = decodedToken.exp * 1000;
          const timeUntilRefresh = expiryTime - Date.now() - REFRESH_TIME_BEFORE_EXPIRY;
          setupTokenRefresh(timeUntilRefresh);
        }
        
        setUser(userData);
        setIsAuthenticated(true);
        return true;
      } else {
        throw new Error(response.data.message || 'Failed to refresh token');
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
      handleLogout();
      return false;
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      setLoading(true);
      
      const response = await axios.post(
        "https://two5-backend.onrender.com/api/v1/login",
        { email, password }
      );

      if (response.data.success) {
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
        
        // Store token and user info
        if (response.data.data.token) {
          const { token, userPayload } = response.data.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userPayload.id);
          
          // Set up refresh timer
          const decodedToken = parseJwt(token);
          if (decodedToken) {
            const expiryTime = decodedToken.exp * 1000;
            const timeUntilRefresh = expiryTime - Date.now() - REFRESH_TIME_BEFORE_EXPIRY;
            setupTokenRefresh(timeUntilRefresh);
          }
          
          setUser(userPayload);
          setIsAuthenticated(true);
          
          // Redirect to user dashboard
          navigate(`/endeavour/${userPayload.id}`);
          return true;
        } else {
          throw new Error("Token not found in response");
        }
      } else {
        throw new Error(response.data.message || "Login failed");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message || "Network error. Please try again later";
      toast.error(errorMsg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    
    // Clear server-side session/cookies
    axios.post('https://two5-backend.onrender.com/api/v1/logout')
      .catch(err => console.error("Logout request failed:", err));
    
    // Update state
    setUser(null);
    setIsAuthenticated(false);
    
    // Redirect to home
    navigate('/endeavour');
  };

  // Create value object
  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout: handleLogout,
    refreshToken
  };

  // Return provider
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Add PropTypes after component definition
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Create a hook for using the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};