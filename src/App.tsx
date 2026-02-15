import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WatermarkLayer from "./components/WatermarkLayer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import IdeaBankPage from "./pages/IdeaBankPage";
import ProgressPage from "./pages/ProgressPage";
import HusketPage from "./pages/HusketPage";

import KjopsvilkarPage from "./pages/KjopsvilkarPage";
import BrukervilkarPage from "./pages/BrukervilkarPage";
import PersonvernPage from "./pages/PersonvernPage";

const App: React.FC = () => {
  return (
    <div className="app-shell">
      <WatermarkLayer />

      <Header />

      <div className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/om" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/idebank" element={<IdeaBankPage />} />

          {/* Produkter */}
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/husket" element={<HusketPage />} />

          {/* Legal */}
          <Route path="/kjopsvilkar" element={<KjopsvilkarPage />} />
          <Route path="/brukervilkar" element={<BrukervilkarPage />} />
          <Route path="/personvern" element={<PersonvernPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
