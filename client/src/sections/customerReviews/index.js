import React from "react";
import maps from "../../assets/images/maps.png";
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import "./customerReviews.css";
import house2 from "../../assets/images/house2.jpg";
import house3 from "../../assets/images/house3.jpg";
import house4 from "../../assets/images/house4.jpg";

function CustomerReviews() {
      const slideImages = [
  house2,
  house3,
  house4
];
    return (
        <div>
            <div id="customerReviews"className="section">
            <h1 className="title">Customer Reviews</h1>
            <hr />
            </div>
            
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span><p className="review">"Ronald and his crew were fantastic"</p><p className="review-name">- Jane J.</p></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span><p className="review">"10/10 Highly Recommended!"</p><p className="review-name">- Sarah M.</p></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span><p className="review">"Never doing my own lawn again!"</p><p className="review-name">- Michael S.</p></span>
            </div>
          </div>
        </Slide>
        </div>
  );
}

export default CustomerReviews;