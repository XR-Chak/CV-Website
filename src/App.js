import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect,useState } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
function App() {
  
  return (
   <div className='App'>
   <Router>
    <Navbar/>
    <Routes>  
     <Route path="/Projects" element={<Projects/>}/>
     <Route path="/Experience" element={<Experience/>}/>
     <Route path="/" exact element={<Home/>}/>
    </Routes>
   </Router>
 
     
   </div> 
   
  );
}

export default App;
