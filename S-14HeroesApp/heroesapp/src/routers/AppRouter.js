import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//import { DcScreen } from "../componens/dc/DcScreen";
import { LoginScreen } from "../componens/login/LoginScreen";
// import { MarvelScreen } from "../componens/marvel/MarvelScreen";
// import { SearchScreen } from "../componens/search/SearchScreen";
// import { AboutScreen } from "../componens/about/AboutScreen";
// import { Navbar } from "../componens/ui/Navbar";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<MarvelScreen />} />
        <Route path="/marvel" element={<MarvelScreen />} />
        <Route path="/dc" element={<DcScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/about" element={<AboutScreen />} /> */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
