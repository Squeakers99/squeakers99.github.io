import React, {useEffect, useState} from "react";
import Navbar from "./Components/NavBar";
import Home from "./Components/Pages/Home/Home";
import Projects from "./Components/Pages/Projects/Projects";
import ResumePage from "./Components/Pages/Resume/ResumePage";
import About from "./Components/Pages/About/About"
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import "./Style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Components/Pages/Contact/Contact";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          updateLoad(false);
      }, 1200);

      return () => clearTimeout(timer);
  }, []);

  return (
      <Router>
          <div className="App" id={load ? "no-scroll" : "scroll"}>
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/projects" element={<Projects/>}/>
                  <Route path="/resume" element={<ResumePage/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/about" element={<About/>}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;