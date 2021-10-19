import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavLinks from "./components/UI/NavLinks";
import HeroBanner from "./components/UI/HeroBanner";
import Headline from "./components/UI/Headline";
import TourCards from "./components/UI/TourCards";
import ExploreSection from "./components/UI/ExploreSection";
import FastTravelSection from "./components/FastTravelSection";
import Testimonials from "./components/UI/Testimonials";
import DownloadSection from "./components/UI/DownloadSection";
import Footer from "./components/UI/Footer";

const App = () => {
  return (
    <div className='App'>
      <NavLinks />
      <HeroBanner />
      <Headline />
      <TourCards />
      <ExploreSection />
      <FastTravelSection />
      <Testimonials />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default App;
