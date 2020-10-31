import React, { useEffect, useState } from "react";
import './css/about.css';
import {db, auth, storage} from './firebase'
import { Link ,useLocation } from 'react-router-dom'


function About() {
  const [currentUrl, setCurrentUrl] = useState(useLocation().pathname)

  useEffect(() => {
    if (currentUrl == "/"){
      var navigation = document.querySelector("nav")
      navigation.classList.add("white")
      console.log()

    }else {
      var navigation = document.querySelector("nav")
      navigation.classList.remove("white")
    }
  },[])
  return (
    <div className="About">
      <p className="ana">Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia </p>
    </div>
  );
}

export default About;
