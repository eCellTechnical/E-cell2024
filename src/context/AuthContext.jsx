// src/context/AuthContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Create context
const AuthContext = createContext(null);

// Token refresh timer - set to refresh 5 minutes before expiration
const REFRESH_TIME_BEFORE_EXPIRY = 5 * 60 * 1000; // 5 minutes in milliseconds

// Create Auth Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
          // Token expired, logout
          handleLogout();
        } else {
          // Token valid, set user from token
          setUser(decodedToken);
          setIsAuthenticated(true);
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

  // Login function - for OTP verification
  const login = (token, userData) => {
    try {
      // Store token
      localStorage.setItem("token", token);

      // Set user data
      setUser(userData);
      setIsAuthenticated(true);

      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  // Logout function
  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('token');

    // Update state
    setUser(null);
    setIsAuthenticated(false);
  };

  // Create value object
  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout: handleLogout
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