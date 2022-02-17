import React from 'react';
import {Link} from 'react-router-dom';
import Banner from './Banner';
import '../navbar/navbar.scss';
import TutorialCard from '../card/TutorialCard';
function Navbar(){
    return(
        <>
        <div className="container-fluid">
       <nav className="navbar navbar-expand-lg mt-3 navbar-light ">
  <div className="container">
    <Link className="navbar-brand" to="#"> DOMAIN </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{color:"red"}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tutorial">Tutorials</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/test">Testimonials</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
<Banner/>
<TutorialCard/>
        </>
    )
}
export default Navbar;