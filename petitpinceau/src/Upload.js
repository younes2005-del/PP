import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal"
import {db, auth, storage} from './firebase'
import { Button, Input } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
import { Link ,useLocation } from 'react-router-dom'
import  './css/Upload.css'
import firebase from 'firebase'










function ImageUpload(){
    const [caption, setCaption] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState(0)

    const handleChange = (e) =>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }


    const handleUpload = () =>{
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                console.log(Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            },
            (error) =>{
                alert(error.message)
            },() =>{
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url =>{
                    db.collection("paints").add({
                        timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                        caption : caption,
                        imgUrl : url,
                        statut: 'disponible',
                        Price : price
                    })
                });

                    
                    setCaption('')
                    setImage(null)
                }
            
        )
    }


return (
    <div className="imageUpload">
        <input type="number" onChange={event => setPrice(event.target.value)} placeholder='Prix'></input>
        <textarea type ="text" placeholder="Saisissez une legende ...." onChange={event => setCaption(event.target.value)} value={caption}></textarea>
        <input type="file" onChange={handleChange}></input>
        <Button onClick ={handleUpload}>
            Upload
        </Button>
    </div>
)
}

export default ImageUpload