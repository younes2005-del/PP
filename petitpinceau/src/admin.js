import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal"
import {db, auth, storage} from './firebase'
import { Button, Input } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
import { Link ,useLocation } from 'react-router-dom'
import './css/admin.css'
import Analistic from './Analistic'



function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Admin() {
    const [user, setUser] = useState(null)
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [open, setOpen] = useState(false)
  const [currentUrl, setCurrentUrl] = useState(useLocation().pathname)

  
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle);
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
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
    if(authUser) {
      setUser(authUser);
      console.log(user)
      
     
    }else{
      setUser(null);
    }
  })
    return () =>{
      unsubscribe();
    }
  },[user])
  

  const signIn = (event) => {
    event.preventDefault()
    auth.signInWithEmailAndPassword(email, password).catch(error => {alert(error)})
    setUser()

    setOpen(false)
  }
    return(
        <div className="adminPart">
              {(user) ? (<Analistic/>) : (null)}
              <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    className = "modal"
                    >
                    <div style={modalStyle} className={classes.paper}>
                        <h1>Petit Pinceau</h1>
                        <form className="app__signup">

                        

                            <Input
                            placeholder="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />

            
                            <Input
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            /> 
                            <Button type="submit" onClick={signIn}>Sign In</Button>
                        </form>  
                    </div>
                </Modal>
                <div className="button">
                {(user) ? (<Button  onClick={() => {auth.signOut()}}>Déconnécter : </Button> ) : (<Button  onClick={() => {setOpen(true)}}>Connect : </Button> )}
                </div>
                
                
            

        </div>
    )
}


export default Admin;