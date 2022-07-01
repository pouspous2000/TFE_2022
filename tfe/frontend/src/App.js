// // import ReactDOM from "react-dom";
// import 'bootstrap';
// import 'node_modules/jquery/dist/jquery.slim.min.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/umd/popper.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';



// import 'popper/dist/umd/popper.min.js';


import Test from './Test.js';
import ProfilClient from './ProfilClient.js';
import Navbar from './Navbar.js';
import Calendrier from './Calandar.js';
import Informations from './Informtions.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
    return (
        <Router>
            <div className='App'>
                <Navbar />
                <div className='Content'>
                    <Routes>
                        <Route exact path="/test" element={<Test />} />
                        <Route exact path="/Calendrier" element={<Calendrier />} />
                        <Route exact path="/Informations" element={<Informations/>}/>
                        <Route exact path="/ProfilClient" element={<ProfilClient/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;