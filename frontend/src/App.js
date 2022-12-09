
import './App.css';
import Navbar from "./components/Navbar"
import posts from './data/example-data'
import AllPosts from './components/AllPosts'
// import OnePost from './components/OnePost';
import React from  'react';
import About from './components/About';
import Services from './components/Services';
import {Routes , Route} from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  // console.log(posts);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<AllPosts />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Services />} />
        <Route exact path="/signin" element={<Signin/>} />
        <Route exact path="/signup" element={<Signup/>} />
      </Routes>
      <Services />
    </div>
  );
}

export default App;
