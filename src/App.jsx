import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Mimosa from "./components/Flowers/Mimosa/Mimosa";
import Lavanda from "./components/Flowers/Lavanda/Lavanda";
import Peony from "./components/Flowers/Peony/Peony";
import Orchid from "./components/Flowers/Orchid/Orchid";
import Tulip from "./components/Flowers/Tulip/Tulip";
import Rose from "./components/Flowers/Rose/Rose";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Content />} />
        <Route path="/lavanda" element={<Lavanda />} />
        <Route path="/mimosa" element={<Mimosa />} />
        <Route path="/peony" element={<Peony />} />
        <Route path="/orchid" element={<Orchid />} />
        <Route path="/tulip" element={<Tulip />} />
        <Route path="/rose" element={<Rose />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
