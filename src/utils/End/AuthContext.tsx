import React, { createContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  userId: any; 
  login: (userData: any) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userId");
    if (storedUser) setUserId(JSON.parse(storedUser));
  }, []);

  const login = (userData: any) => {
    setUserId(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUserId(null);
    localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider value={{ userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
