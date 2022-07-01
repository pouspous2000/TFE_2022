import React, { useState, useEffect } from 'react';
import '../css/UploadImage.css';

export default function UploadImages() {
    const [profil, setProfil] = useState(null);
    const [imagesProfil, setImagesProfil] = useState([]);
    const [imageURLs, setimageURLs] = useState([]);
    const idClient = 1;

    // useEffect(() => {
    //     var imageProfil = {
    //         method: 'GET',
    //         headers: { 'Content-type': 'application/json' }
    //     }
    //     fetch(`/api/profilClient/${idClient}`, imageProfil)
    //         .then(response => {
    //             console.log(response)
    //             return response.json()
    //         })
    //         .then(json => {
    //             console.log(json)
    //             setProfil(json)
    //         })  

    // }, [])

    // console.log(imageProfil)
    // useEffect(() => {

    //     if (profil.length < 1) return;
    //     console.log("Nom fichier image", profil[0].name)
    //     const newImageUrls = [];
    //     profil.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    //     setimageURLs(newImageUrls);

    // }, [profil]);

    // function onImageChange(e) {
    //     setProfil([...e.target.files]);
    // }    
    return (
        <>
            <div id='cadreProfil' style={{ 'backgroundColor': '#ccbd90', 'height': '200px' }}>
                <label class="custom-file-upload">
                    <input type='file' accept='image/*' onChange className='boutonChangementImage' style={{ 'backgroundColor': 'black' }} />
                    <img className='image' style={{ 'borderRadius': '50%', 'height': '180px', 'width': '180px' }} src={imageURLs} alt='ProfilClient' />
                </label>
            </div>

        </>
    )
}