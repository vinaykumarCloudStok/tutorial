import React from 'react';
import '../Footer/footer.scss';
import {FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa'
const Footer = () => {
    const footerdata=[
        {
      head:"Quick Links",
      one:"About Us",
      two:"Testimonials",
      three:"Terms Of Services",
      four:"Privacy",
      five:"Contact Us"
    },
    {
        head:"Resources",
        one:"About Us",
        two:"Testimonials",
        three:"Terms Of Services",
        four:"Privacy",
        five:"Contact Us"
      },
      {
        head:"Support",
        one:"About Us",
        two:"Testimonials",
        three:"Terms Of Services",
        four:"Privacy",
        five:"Contact Us"
      },
      {
        head:"Company",
        one:"About Us",
        two:"Testimonials",
        three:"Terms Of Services",
        four:"Privacy",
        five:"Contact Us"
      },
]
  return (
  <>
  <div className="container-fluid">
      <div className="container p-5">
          <div className="row justify-content-between">
              <div className="col-lg-3 col-12">
                <div className="footer-about">
                    <h6 className=' mb-4'>About Us</h6>
                    <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>

                </div>
                <div className=" footer-social">
                    <ul className='list-unstyled d-flex'>
                        <li> <FaFacebook/> </li>
                        <li> <FaTwitter/> </li>
                        <li> <FaLinkedin/> </li>
                        <li> <FaInstagram/> </li>
                    </ul>
                </div>
              </div>
              {
                  footerdata.map((e,i)=>{
                      return(
                          <>
                       <div className="col-lg-2 col-12 footer-link" key={i}>
                  <h6 className='quick mb-4'> {e.head} </h6>
                  <ul className='list-unstyled'>
                      <li className='mt-4'> {e.one} </li>
                      <li className='mt-4'> {e.two} </li>
                      <li className='mt-4'> {e.three} </li>
                      <li className='mt-4'> {e.four} </li>
                      <li className='mt-4'> {e.five} </li>
                  </ul>
              </div>
                          </>
                      )
                  })
              }
              
             
          </div>
          <div className="row text-center pt-5 mt-5">
              <div className="col-12 footer-copy">  
               <p>Copyright &copy;2022 All Rights Reserve | This Website Made by Cloud Tutorial</p>
              </div>
          </div>
      </div>
  </div>
  </>
  );
};

export default Footer;
