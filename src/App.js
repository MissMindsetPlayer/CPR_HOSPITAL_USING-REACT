import "./styles.css";
import "./App.css";
import AboutUS from "./components/AboutUS";
import Footer1 from "./components/Footer1";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";

export default function App() {
  return (
    <div className="">
      <Header />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      <Footer1 />
    </div>
  );
}
