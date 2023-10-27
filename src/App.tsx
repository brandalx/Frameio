import React from "react";
import "./global.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./_root/pages";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />
        {/* private routes */}
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
