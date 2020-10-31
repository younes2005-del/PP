import React, { useEffect, useState } from "react";
import './css/commande.css'
import { Button, Input } from '@material-ui/core';
import {db, auth, storage} from './firebase'


function Cmd({num, img, name, code, msg, timestamp, id}) {
    const [imgUrl, setImg] = useState('')
    useEffect(() => {
        db.collection('paints').doc(img).get().then(function(doc) {
            if (doc.exists) {
               setImg(doc.data().imgUrl)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        })
    }, [])
    var date = new Date(timestamp * 1000);
    var day = date.getDay() + 1
    var month = date.getMonth() 
    var year = date.getYear() -69
    
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    
    var formattedTime = "Le" + day + "/" + month + "/" + year + "  à  "  + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
    
    const Buy = () => {
        db.collection("reservations").doc(id).delete()
        db.collection('paints').doc(img).update({
            statut : 'Vendu'
        })
    }
    const Done = () =>{
        db.collection("reservations").doc(id).delete()
        db.collection('paints').doc(img).update({
            statut : 'disponible'
        })
    }
    
    
    return(
        <div className="cmd">
            <img src={imgUrl}></img>
            <p>Nom : <strong>{name}</strong></p>
            <p>numéro de téléphone : <strong>{num}</strong></p>

            <p>Le code : <strong>{code}</strong></p>
            <p>Date : <strong>{formattedTime}</strong></p>
            <p>Message : <strong>{msg}</strong></p>


            <Button onClick={Buy}>Vendu</Button>
            <Button onClick={Done}>Durée términé:</Button>

        </div>
    )
}


export default Cmd