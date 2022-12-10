<<<<<<< HEAD
import "./App.css";
import Navbar from "./components/Navbar";
// import posts from './data/example-data'
import AllPosts from "./components/AllPosts";
// import OnePost from './components/OnePost';
import React, { useEffect, useState } from "react";
import About from "./components/About";
import Services from "./components/Services";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";


import './App.css';
import Navbar from "./components/Navbar"
import posts from './data/example-data'
import AllPosts from './components/AllPosts'
import OnePost from './components/OnePost';

function App() {
  // console.log("iiiiiiiiiiiiiiiiiiiiii",posts);

  
  return (
    <div className="App">

      <Navbar  />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<AllPosts />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Navbar />
    </div>
  );

      
    
    


}


       


export default App;