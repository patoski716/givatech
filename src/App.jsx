import React,{useEffect} from "react";
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Work from './components/Works';
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  useEffect(() => {
    AOS.init({
      duration:3000
    });
  }, [])
  return (
    <>
    
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/our-work" element={<Work/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>

      </Routes>
    </Router>
    <Footer/>              
    </>
  )
}

export default App
