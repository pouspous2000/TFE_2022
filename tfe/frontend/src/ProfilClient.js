import './css/ProfilClient.css';
// import React, { useState, useEffect } from 'react';
import UploadImages from './Component/UploadImage';
import ZoneCheval from './Component/ZoneCheval';
import ZoneClient from './Component/ZoneClient';


function ProfilClient() {

    return (
        <>
            <UploadImages />
            <div className='zoneClient'>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Mon Profil</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Mes chevaux</button>
                    </li>

                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><ZoneClient /></div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><ZoneCheval /></div>
                </div>
            </div>




        </>
    )

}
export default ProfilClient;