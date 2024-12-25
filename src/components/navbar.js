import React from 'react';
import './navbar.css'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'
import contactimg from "../assets/contact.png"
const Navbar=()=> {
    return (
     <nav className='navbar'>
        <img src ={logo} alt="logo" className='logo' />
        <div className='desktopMenu'>
        <Link className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem'>About</Link>
        <Link className='desktopMenuListItem'>Portfolio </Link>
        <Link className='desktopMenuListItem'>Client</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src ={contactimg} className='deskTopMenuImg'/>
            Contact Me 
        </button>

     </nav>
    );
  }
  
  export default Navbar;
  