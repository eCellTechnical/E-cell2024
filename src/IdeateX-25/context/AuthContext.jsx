// src/IdeateX-25/context/AuthContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Create context
const AuthContext = createContext(null);

// Create Auth Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Parse JWT to get payload
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  // Set up axios defaults for IdeateX API
  useEffect(() => {
    // Add interceptor to add auth token to requests
    const interceptor = axios.interceptors.request.use(
      config => {
        const token = localStorage.getItem('ideatex_token');
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
    const checkAuthStatus = () => {
      try {
        const token = localStorage.getItem('ideatex_token');

        if (!token) {
          setIsAuthenticated(false);
          setUser(null);
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
      }
    };

    checkAuthStatus();
  }, []);

  // Login function - for OTP verification
  const login = (token, userData) => {
    try {
      // Store token
      localStorage.setItem("ideatex_token", token);

      // Set user data
      setUser(userData || parseJwt(token));
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
    localStorage.removeItem('ideatex_token');
    localStorage.removeItem('ideatex_user');
    localStorage.removeItem('ideatex_teamID');

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
    // Return a default context instead of throwing
    return {
      user: null,
      isAuthenticated: false,
      loading: false,
      login: () => {},
      logout: () => {}
    };
  }
  return context;
};