
import "./App.css";
import Navbar from "./components/Navbar";
// import posts from './data/example-data'
import AllPosts from "./components/AllPosts";
// import OnePost from './components/OnePost';

import React from "react";
import About from "./components/About";
import Services from "./components/Services";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";



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
      
    </div>
  );

      
    
    


}


       


export default App;