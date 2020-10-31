import React, { useEffect, useState } from "react";
import './css/shop.css';
import {db, auth, storage} from './firebase'
import { Link ,useLocation } from 'react-router-dom'
import Item from './Item'

function Shop() {
  const [currentUrl, setCurrentUrl] = useState(useLocation().pathname)
  const [posts, setPosts] = useState([])


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

  useEffect(() => {
    db.collection('paints').orderBy('timestamp', 'desc').onSnapshot(snapchot => {
      setPosts(snapchot.docs.map(post => ({
        id : post.id,
        post : post.data()
      })))
    })
    console.log(posts)
  },[])
  return (
      <div className="Shop">
        
        {posts.map(({id , post}) => (
              <Item key ={id} id={id} imgUrl={post.imgUrl} Caption={post.caption} Price={post.Price} statut={post.statut} />
        ))
        }
      
      </div>
  );
}

export default Shop;
