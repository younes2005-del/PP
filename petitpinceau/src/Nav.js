import React, {useState, useEffect} from 'react';
import './App.css';
import {db, auth, storage} from './firebase'
import { Link ,useLocation } from 'react-router-dom'


 
function App() {
    const navstyle = {
        textDecoration :"none"
    }
  
    useEffect(() => {
      window.addEventListener('scroll',() => {
          var navigation = document.querySelector("nav")
          navigation.classList.toggle("sticky", window.scrollY > 0)
      })
    },[])
   
  return (
    <nav >
      
          <Link style={navstyle} to="/" >
             <h1 className="logo">Petit Pinceau</h1>
          </Link>
        <ul className="nav-links">
            <Link style={navstyle} to="/">
             <li>Home:</li>
            </Link>
            <Link style={navstyle} to="/about" >
             <li>About:</li>
            </Link>
            <Link style={navstyle} to="/shop" >
             <li>Shop:</li>
            </Link>
            <Link style={navstyle} to="/admin" >
             <li>Admin part:</li>
            </Link>
            
        </ul>
      </nav>
  );
}

export default App;
