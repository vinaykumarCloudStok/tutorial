import React from 'react';
import r from '../../assets/images/native.webp'
import { Link } from 'react-router-dom'
import '../card/latcourse.scss';
const Lerningcard = () => {
    const cardData=[
        {
          title:"TUTORIAL",
          head:"Learning React Native",
          para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quidem totam exercitationem ",
          p:"React Java Script",
          list:"1hr 24m Advanced Jun 18, 2020",            
        },
        {
            title:"TUTORIAL",
            head:"Learning React Native",
            para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quidem totam exercitationem ",
            p:"React Java Script",
            list:"1hr 24m Advanced Jun 18, 2020",            
          },
        
          
    ]
   
  return (
      <>
    {/* <div className="container-fluid lat">
      <div className="container"> */}
      <div className='row justify-content-evenly'>
      <div className="col-lg-7 col-12">
      {
        cardData.map((ele,i)=>{
          return(
          <>
   
                  <div className="d-flex p-4 shadow bg-white mb-4 box-right " key={i}>
                  <div className='img-wrap'>
                      <img src={r} alt=""  />
                  </div>
                  <div className='learn-body'>
          <h3>{ele.title}</h3>
          <p> {ele.head} </p> 
          <p> {ele.para} </p>
          <p> {ele.list} </p>           
          
                      <p>
                          <Link className='btn btn-primary w-75 '> View </Link>
                      </p>
                  </div>
                  </div>

          </>
         ) })

      }
      </div>    
      <div className="col-lg-5 col-12">
       
                <div className=" shadow bg-white p-2 box-left" >
                  <div className=" box-img">
                      <img src={r} alt="" />
                      </div>
                      <div>
                     <div className="box-head">
                     <h4  > Learning Aws </h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sint!
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sint!
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sint!
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sint!
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sint!

                      </p>
                     </div>
                  </div>
                  </div>
              
               
                  </div>
</div>        
      <div className="row mt-3">
        <div className="col-lg-12 col-12">
         <div className="shadow p-5 bg-white">
         <h4>Description</h4>
         <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nostrum distinctio, neque a quam odio molestias perferendis maxime nobis at.</p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nostrum distinctio, neque a quam odio molestias perferendis maxime nobis at.
         </div>
        </div>
      </div>
              </>
  )
};

export default Lerningcard;
