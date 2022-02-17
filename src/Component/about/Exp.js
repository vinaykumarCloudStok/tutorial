import React from "react";
import r from '../../assets/images/cardright.webp'
// import TutorialCourse from "../card/TutorialCourse";
const Exp=()=>{
    return(
        <>
     <div className="container-fluid bg-light">
         <div className="container">
             <div className="row">
                 <div className="col-lg-12">
                     <h1>Our Experiences</h1>
                 </div>
                 <div className="col-lg-4 ">
                     <div className="exp-content border shadow bg-white d-flex mx-3">
                         <div className="exp-logo w-75">
                             <img src={r} alt="" />
                         </div>
                         <div className="exp-head">
                           <h2>AWS</h2>
                         </div>
                     </div>
                     <p> {"->"} </p>
                     
                 </div>
                 <div className="col-lg-4">
                     <div className="exp-content border shadow bg-white d-flex mx-3">
                         <div className="exp-logo w-75">
                             <img src={r} alt="" />
                         </div>
                         <div className="exp-head">
                           <h2>AWS</h2>
                         </div>
                     </div>
                     
                 </div>
                 <div className="col-lg-4">
                     <div className="exp-content border shadow bg-white d-flex mx-3">
                         <div className="exp-logo w-75">
                             <img src={r} alt="" />
                         </div>
                         <div className="exp-head">
                           <h2>AWS</h2>
                         </div>
                     </div>
                     
                 </div>
              
                 
             </div>
         </div>
        
     </div>
        </>
    )
}
export default Exp;