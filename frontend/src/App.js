import "./App.css";
import Navbar from "./components/Navbar";
// import posts from './data/example-data'

// import OnePost from './components/OnePost';
import React, { useEffect, useState } from "react";
import About from "./components/About";
import Services from "./components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  const [connected, setConnected] = useState(false);
  const checkToken = () => {
    if (typeof window != "undefined") {
      const user = JSON.parse(localStorage.getItem("token"));
      if (user) {
        setConnected(true);
      } else {
        setConnected(false);
      }
    }
  };
  useEffect(() => {
    checkToken();
  }, [connected]);
  const logout = () => {
    localStorage.clear();
  };
  return (
    <BrowserRouter>
      <Navbar user={connected} logout={logout} />
      <Routes>
        <Route index element={<Login />} />

        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Services />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
