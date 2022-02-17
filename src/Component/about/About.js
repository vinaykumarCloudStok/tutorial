import React from "react";
import { Link } from "react-router-dom";
import r from '../../assets/images/cardright.webp'
import '../about/about.scss';
const About=()=>{
    return(
        <>
        <div className="container mt-5">
            <div className="row ">
                <div className="col-lg-12 col-12">
                    <div className="about-container">
                        <div className="row flex-v-align">
                       <div className="col-lg-5 col-12">
                        <div className="about-img w-100">
                            <img src={r} alt="" className="w-100 h-100 rounded-circle"/>
                        </div>
                       </div>
                       <div className="col-lg-7 col-12">
                        <div className="about-text">
                            <h6>AWS DEVELOPER</h6>
                            <h1>Alex Smith</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, repudiandae?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, repudiandae?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, repudiandae?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, repudiandae?

                            </p>
                            <div className="about-btn">
                                <Link to="#" className="dwn-btn"> Download CV </Link>
                                <Link to="#" className="cn-btn"> Contact Us </Link>
                            </div>
                        </div>
                       </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        </>
    )
}
export default About;