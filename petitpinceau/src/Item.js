import React, {useState, useEffect} from 'react';
import './css/Item.css'
import { Button, Input } from '@material-ui/core';
import {db, auth, storage} from './firebase'
import firebase from 'firebase';



function Item({imgUrl, Price, Caption, statut, id}) {
    const reserve = (event) => {
        event.preventDefault()
        let name = prompt('Entrez votre nom :')
        let code = prompt('Entrez un code(n\'importe le quel):')
        let num = prompt('Entrez votre numéro de téléphone:')
        let msg = prompt('Entrez un message :')
        db.collection('paints').doc(id).update({
            statut : 'Résérvé'
        })
        db.collection('reservations').add({
            code : code,
            idPaint : id,
            message : msg,
            name : name,
            num : num,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        })
    }
    const stylesheet = {
        color : (statut == 'disponible') ? 'green' : 'red'
    } 
    return(
        <div className="Item">
            <img className="img" src={imgUrl}></img>
            {(statut == 'disponible') ? (<h2 className="Price">{Price}  Dh</h2>) : (null)}  
            
            <h3 style = {stylesheet}>{statut}</h3>
            <p className="Caption">{Caption}</p>
            {(statut == 'disponible') ? (<Button onClick={reserve}>Résérver</Button>) : (null)}        
</div>
    )
}

export default Item