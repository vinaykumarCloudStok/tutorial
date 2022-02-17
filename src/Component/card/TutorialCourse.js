import React from 'react'
// import r from '../../assets/images/download.png';
import '../card/card.scss';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { NavLink } from 'react-router-dom';
const TutorialCourse = () => {
  const options = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      800: {
        items: 4
      },
      1000: {
        items: 5
      }
    }
  };
    // const list = [
    //     {
    //       img:r,
    //       heading:"React Js",
    //     },
    //     {
    //         img:r,
    //         heading:"React Js",
    //       },
    //       {
    //         img:r,
    //         heading:"React Js",
    //       },
    //       {
    //         img:r,
    //         heading:"React Js",
    //       },
    //       {
    //         img:r,
    //         heading:"React Js",
    //       },
    //       {
    //         img:r,
    //         heading:"React Js",
    //       },
    // ]
    return (
        <>
      <div className="slider">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="should-know-title"> Choose Course </div>
            <OwlCarousel
              className="slider-items owl-carousel"
              {...options}
              id="slider_cat"
            >
              <div className="item">
                <NavLink className="cate_a" to="/fullDetailsPage">
                  <div className="cat_box">
                    <div className="cate-box1">
                      <div className="cat_offer_text">
                        <img
                          src="https://resources.stuff.co.nz/content/dam/images/4/y/o/6/8/g/image.related.StuffThumbnailSixteenByNine.1600x900.2128uc.11ys6n.png/1599630686540.jpg?format=pjpg&crop=16:9,smart&width=200"
                          alt="abc"
                        />
                        <h5>Dad to be reunited with twins</h5>
                        {/* <!-- <div className="all_items">45 item</div> --> */}
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>

              <div className="item">
                <NavLink className="cate_a" to="/fullDetailsPage">
                  <div className="cat_box">
                    <div className="cate-box1">
                      <div className="cat_offer_text">
                        <img
                          src="https://resources.stuff.co.nz/content/dam/images/4/y/m/4/c/l/image.related.StuffThumbnailSixteenByNine.1600x900.4yo8nm.120x1p.png/1599631255429.jpg?format=pjpg&crop=16:9,smart&width=200"
                          alt="abc"
                        />
                        <h5>Afternoon trivia challenge</h5>
                        {/* <!-- <div className="all_items">49 item</div> --> */}
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>

              <div className="item">
                <NavLink className="cate_a" to="/fullDetailsPage">
                  <div className="cat_box">
                    <div className="cate-box1">
                      <div className="cat_offer_text">
                        <img
                          src="https://resources.stuff.co.nz/content/dam/images/4/y/o/8/e/w/image.related.StuffThumbnailSixteenByNine.1600x900.211s9q.120x1p.png/1599631255429.jpg?format=pjpg&crop=16:9,smart&width=200"
                          alt="abc"
                        />
                        <h5>Fisheran witness rare sight of white shark</h5>
                        {/* <!-- <div className="all_items">7 item</div> --> */}
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>

              <div className="item">
                <NavLink className="cate_a" to="/fullDetailsPage">
                  <div className="cat_box">
                    <div className="cate-box1">
                      <div className="cat_offer_text">
                        <img
                          src="https://resources.stuff.co.nz/content/dam/images/4/y/o/9/0/p/image.related.StuffThumbnailSixteenByNine.1600x900.2125s7.120x1p.png/1599631255429.jpg?format=pjpg&crop=16:9,smart&width=200"
                          alt="abc"
                        />
                        <h5>The subrau legacy is no more</h5>
                        {/* <!-- <div className="all_items">19 item</div> --> */}
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>

              <div className="item">
                <NavLink className="cate_a" to="/fullDetailsPage">
                  <div className="cat_box">
                    <div className="cate-box1">
                      <div className="cat_offer_text">
                        <img
                          src="https://resources.stuff.co.nz/content/dam/images/4/y/o/5/o/5/image.related.StuffThumbnailSixteenByNine.1600x900.4yo8sz.120x1p.png/1599631255429.jpg?format=pjpg&crop=16:9,smart&width=200"
                          alt="abc"
                        />
                        <h5>Many losers if Austria snares rugby</h5>
                        {/* <!-- <div className="all_items">40 item</div> --> */}
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
        {/* <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12">
                    <h6>TUTORIAL COURSES</h6>
                    <h2 className='text'>Choose Course</h2>
                </div>
                {
                    list.map((e,i)=>{
                        return(
                            <>
                              <div className="col-lg-2 col-md-4 col-sm-6 mt-5 text-center" key={i}>
                    <div className="course">
                    
                         <img src={e.img} alt=""   />
                        
                        <h4>{e.heading}</h4>
                    </div>
                </div>
                            </>
                        )
                    })
                }
               
            </div>
        </div> */}
        </>
    )
}

export default TutorialCourse
