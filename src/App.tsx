import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProgressBar from "./component/Progressbar/ProgressBar";
import ProductListing from "./component/ProductListing/ProductListing";
import ContactUs from "./component/ContactUs/ContactUs";
import AboutUs from "./component/AboutUs/AboutUs";
import Navbar from "./component/Navbar/Navbar";

function App() {
  const [currentView, setCurrentView] = useState<"progress" | "listing">(
    "progress"
  );

  const handleSwitchToListing = () => {
    setCurrentView("listing");
  };

  return (
    <Router>
      {currentView === "progress" && (
        <ProgressBar onSwitchToListing={handleSwitchToListing} />
      )}
      {currentView === "listing" && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
