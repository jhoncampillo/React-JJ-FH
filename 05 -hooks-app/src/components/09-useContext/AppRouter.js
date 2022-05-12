import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Aboutscreen } from "./Aboutscreen";
import { ErrorPage } from "./ErrorPage";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className="conatiner">
          <Routes>
            <Route exact path="/about" element={<Aboutscreen />} />
            {/* <Route exact path="/login/:username" element={<LoginScreen />} />// trabaja con useparams */}
            <Route exact path="/login/" element={<LoginScreen />} />
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
