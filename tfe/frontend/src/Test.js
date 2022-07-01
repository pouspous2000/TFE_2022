import { useEffect, useState } from 'react';
const Test =()=>{
    const[etatCam, setEtatCam] = useState(null)

      const coucou = async() => {
        var etatCamera = {method : 'GET',
        headers:{'Content-type':'application/json'}
        }
        await
        fetch(`/api/etatCam`, etatCamera)
        .then(response =>{
            return response.json()
        })
        .then(json=>{
           setEtatCam(json)
        })
        
    }
    

    useEffect(()=>{

       coucou()
       
    }, [])
    return(

        // <div>

        //     {etatCam&&etatCam.map(camera=>
        //     <option className='option'>CAM {camera.nom} : {camera.prenom} Status : OFF</option>
        //     )}
        // </div>

        <div> " " </div>

    )
}
export default Test; 