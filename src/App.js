import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Huddle/Header/header";
import Home from "./Huddle/Home/home";
import About from "./Huddle/About/about";
import Contact from "./Huddle/Contact/contact";
import Services from "./Huddle/Services/services";
// import Footer from "./Huddle/Footer/footer";


const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Services" element={<Services/>}/>
        </Routes>
        {/* <Footer/> */}
          </BrowserRouter>
    
      
    </div>
  )
};

export default App;