import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import Navbar from "./Navbar/Navbar";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import PrivateRoutePage from "./pages/PrivateRoutePage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<PrivateRoutePage />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
