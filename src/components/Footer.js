import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
import React from 'react'
import "../styles/Footer.css" ;
export default function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram/>
            <Facebook/>
            <LinkedIn/>
        </div>
        <p> &copy; 2023 RayChak.com</p>
    </div>
  )
}
