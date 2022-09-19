import React from "react";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Platform from "./Components/Platform";
import Donate from "./Components/Donate";
import Connect from "./Components/Connect";
import Home from "./Components/Home";
import Volunteer from "./Components/Volunteer"
import Vote from "./Components/Vote";
import Events from "./Components/Events";

import {Route, Routes, Link} from "react-router-dom"

function App() {
  

  return (
    <div >
      
      <NavBar />
      <Link to="/" className="site-title">
        <img className="main-logo" src="/volkmann-logo.png" alt="Roxanne Volkmann for Ward 48" />
      </Link>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/connect" element={<Connect/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/platform" element={<Platform/>} />
        <Route path="/volunteer" element={<Volunteer/>} />
        <Route path="/vote" element={<Vote/>} />
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
