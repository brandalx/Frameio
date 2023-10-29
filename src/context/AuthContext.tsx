import { createContext, useContext, useEffect, useState } from "react";

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
  iseIsAutheticated: () => {},
  checkAuthUser: async () => false as boolean,
};

import React from "react";

const AuthContext = () => {
  return <div>AuthContext</div>;
};

export default AuthContext;
