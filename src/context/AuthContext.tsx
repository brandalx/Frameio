import { IUser } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
export const INITIAL_USER = {
  id: "",
  name: "",
  username: "",
  email: "",
  imageUrl: "",
  bio: "",
};

const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAutheticated: false,
  error: null,
  setUser: () => {},
  IsAutheticated: () => {},
  checkAuthUser: async () => false as boolean,
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser>(INITIAL_USER);
  const [isLoading, setIsloading] = useState(false);

  const [isAutheticated, setIsAutheticated] = useState(false);

  const checkAuthUser = () => {};

  const value = {
    user,
    setUser,
    isLoading,
    isAutheticated,
    setIsAutheticated,
    checkAuthUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
