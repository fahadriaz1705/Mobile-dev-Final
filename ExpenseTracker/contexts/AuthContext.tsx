import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  uid: string;
  email: string | null;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, _setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (_email: string, _password: string) => {
    // TODO: Implement Firebase login
  };

  const signup = async (_email: string, _password: string) => {
    // TODO: Implement Firebase signup
  };

  const logout = async () => {
    // TODO: Implement Firebase logout
  };

  const resetPassword = async (_email: string) => {
    // TODO: Implement Firebase password reset
  };

  useEffect(() => {
    // TODO: Implement Firebase auth state listener
    setLoading(false);
  }, []);

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
