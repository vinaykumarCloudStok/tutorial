import React from 'react'
import r from '../../assets/images/native.webp'
import s from '../../assets/images/cardright.webp'
import '../card/card.scss';
import { Link } from 'react-router-dom';
const TutorialCard = () => {
    const data=[
        {
            title:"TUTORIAL",
            para:"Learning React",
            img:s,
        },
        {
            title:"TUTORIAL",
            para:"Learning React",
            img:s,
        },
        {
            title:"TUTORIAL",
            para:"Learning React",
            img:s,
        },

    ]
    return (
        <>  
        <div className="container-fluid card-container ">
         <div className="container s">
         <div className="row h ">
              <div className="col-lg-7 col-sm-12 col-md-12 card1 shadow">
              
                <div className="card-horizontal">
                    <div className="icon">
                        <img className="card-img-top" src={r} alt="card-img-top"/>
                    </div>
                    <div className="card-body" >
                        <Link> TUTORIAL </Link>
                        <h4 className="card-title">Learning React Native</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quidem totam exercitationem eveniet blanditiis nulla, et possimus, itaque alias maxime!</p>
                        <p>React <span>JavaScript</span></p>
                        <p>1hr 24m Advanced Jun 18, 2020</p>
                        {/* <button className='btn1'> hello <i class="fas fa-chevron-right" style={{marginRight:"5px"}}></i> </button> */}
                    </div>
             
               
            </div>
              </div>
              <div className="col-lg-4 col-sm-12 col-md-12 card2 shadow">
                <div className="left-card">
                    <div className="left-img">
                        <img src={r} alt="" />
                    </div>
                    <div className="">
                    <h4>Learning React Native</h4>
                    </div>
                </div>
                
              </div>
          </div>
             </div> 
         </div>
         </>
    )
}

export default TutorialCard
