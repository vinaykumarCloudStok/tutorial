import React from 'react';
import { Link } from 'react-router-dom'
import '../card/latcourse.scss';
import Lerningcard from './Lerningcard';
// import r from '../../assets/images/native.webp'
import {FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'

const LatestTut = () => {
  return (
  <>
  <div className="container-fluid lat ">
      <div className="container">
          {/* <div className="row mb-5 align-items-center justify-content-between search-form">
              <div className="col-lg-8 mb-4 mb-lg-0 col-12">
           <form className='d-flex '> 
            <span className='icon'></span>
            <input type="text" name="" id="" className='form-control shadow mr-2' placeholder='Search Subjects' />
            <input type="submit" name="" id="but" className='btn btn-primary  shadow' value="Search" />
           </form>
              </div>
              <div className="col-lg-3 col-12 social-link">
             <span className='mr-4'> Share: </span>
             <Link to="#" > <FaFacebook/>  </Link>
             <Link to="#" > <FaTwitter/>  </Link>
             <Link to="#" > <FaLinkedin/> </Link>
                </div>
          </div> */}
          <div className="row ">
              <div className="col-lg-12 col-12 pt-5">
                   <div className="mb-4" style={{marginLeft:"25px"}}>
                       
                       <h2 style={{color:"blue"}}>Tutorial</h2>
                   </div>
              </div>
              </div>
            <Lerningcard/>
      </div>
  </div>
  


  </>
  );
};

export default LatestTut;
