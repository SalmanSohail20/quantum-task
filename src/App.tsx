import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProgressBar from "./component/Progressbar/ProgressBar";
// import ProductListing from "./component/ProductListing/ProductListing";
import Analytics from "./pages/Analytics/Analytics";
import Compare from "./pages/Compare/Compare";
import AboutUs from "./pages/AboutUs/AboutUs";
import Layout from "./layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProgressBar />} />

        <Route path="/*" element={<Layout />}>
          <Route path="analytics" element={<Analytics />} />

          <Route path="compare" element={<Compare />} />
          <Route path="competitors" element={<AboutUs />} />
          <Route path="settings" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
