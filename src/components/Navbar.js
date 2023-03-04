import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import "../styles/Navbar.css";
import { Reorder } from '@mui/icons-material';
function Navbar() {
  const [expandNavbar,setExpandNavbar] = useState(false);

  const Location = useLocation();//useLocation is react router hook!!! which can show a object of the path!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  useEffect(()=>{
    setExpandNavbar(false)
  },[Location]);

 
  return (
    <div className='navbar' id={expandNavbar?"open":"close"}>
      <div className='toggleButton'>
        <button onClick={()=>{setExpandNavbar(!expandNavbar)}}><Reorder></Reorder></button>
      </div>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Experience">Experience</Link>
      </div>
    </div>
    
  )
}

export default Navbar