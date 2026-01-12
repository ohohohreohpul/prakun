import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServiceCards from "./components/ServiceCards";
import BenefitsSection from "./components/BenefitsSection";
import MembershipSection from "./components/MembershipSection";
import StudioLocations from "./components/StudioLocations";
import LymphaticSection from "./components/LymphaticSection";
import Testimonials from "./components/Testimonials";
import GiftBestsellers from "./components/GiftBestsellers";
import GiftVoucherSection from "./components/GiftVoucherSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import ServicePage from "./components/ServicePage";
import BookingPage from "./components/BookingPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ServicesPage from "./components/ServicesPage";
import MonthlyOfferPopup from "./components/MonthlyOfferPopup";

const Home = () => {
  return (
    <div className="bg-[#F7F6F4] min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServiceCards />
        <BenefitsSection />
        <MembershipSection />
        <StudioLocations />
        <LymphaticSection />
        <Testimonials />
        <GiftVoucherSection />
        <GiftBestsellers />
        <FAQSection />
      </main>
      <Footer />
      <MonthlyOfferPopup />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/massage/:slug" element={<ServicePage />} />
          <Route path="/buchen" element={<BookingPage />} />
          <Route path="/ueber-uns" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/leistungen" element={<ServicesPage />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
