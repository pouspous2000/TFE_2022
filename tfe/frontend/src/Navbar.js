import React from 'react';
import './css/Navbar.css';
import logo from'./img/logo.png';



function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src={logo} alt='logo'></img></a>
          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" aria-controls="collapseThree">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id='collapseThree' class="collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Calendrier</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/ProfilClient">Profil</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;