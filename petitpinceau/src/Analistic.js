import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal"
import {db, auth, storage} from './firebase'
import { Button, Input } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
import { Link ,useLocation } from 'react-router-dom'
import Cmd from './command'
import ImageUpload from './Upload'





function Analistic() {
    const [reservations, setReservations] = useState([])
    const [number, setNumber] = useState(0)
    useEffect(() =>{
        db.collection('reservations').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setReservations(snapshot.docs.map(doc => ({
                post : doc.data(),
                id : doc.id
            })))
        })
      })
    return(
        <div className="analistic">
            <h1>Vous avez {reservations.length} résérvations !</h1>
            {reservations.map(({ post, id}) => (
            <Cmd key={id} code={post.code} id={id} msg={post.message} name={post.name} timestamp={post.timestamp} img={post.idPaint} num={post.num} />
        ))}
                <ImageUpload/>
        </div>
    )
}


export default Analistic