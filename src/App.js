import React from "react";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Platform from "./Components/Platform";
import Donate from "./Components/Donate";
import Connect from "./Components/Connect";
import Home from "./Components/Home";
import {Route, Routes} from "react-router-dom"

function App() {
  

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/connect" element={<Connect/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/platform" element={<Platform/>} />
      </Routes>
      
      {/* <About />
      <Platform />
      <EmailList />
      <Donate /> */}
      {/* Socials */}
    </div>
  );
}

export default App;
