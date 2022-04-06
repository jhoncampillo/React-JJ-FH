import React from "react";
import { Routes, Route } from "react-router-dom";
import { MarvelScreen } from "../componens/marvel/MarvelScreen";
import { SearchScreen } from "../componens/search/SearchScreen";
import { AboutScreen } from "../componens/about/AboutScreen";
import { DcScreen } from "../componens/dc/DcScreen";
import { Navbar } from "../componens/ui/Navbar";
import { HeroScreen } from "../componens/hero/HeroScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          {/* quito el / de; path="/ por que aparece en otra parte"  */}
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="hero/:heroeId" element={<HeroScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};

// <Route path="hero/:heroeId" element={<HeroScreen />} />
//Le mando el parametro al componente heroScreen
