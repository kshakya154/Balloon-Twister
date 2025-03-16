import React, { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import Work from "./components/work/Work";
import Testimonial from "./components/Testimonial";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Homepage from "../pages/Homepage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
