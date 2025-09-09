import React from 'react'
import pic1 from "./images/1.jpg";
import pic2 from "./images/2.jpg";
import pic3 from "./images/3.jpg";
import './Header.css';  

const Header = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pic1} className="d-block w-100 carousel-img" alt="Furniture photo" />
            <div className="carousel-caption d-none d-md-block">
              <p>✨ “Turning ideas into reality with smart solutions.”</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={pic2} className="d-block w-100 carousel-img" alt="Furniture photo" />
            <div className="carousel-caption d-none d-md-block">
              <p>🚀 “Innovation that empowers your digital journey.”</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={pic3} className="d-block w-100 carousel-img" alt="Furniture photo" />
            <div className="carousel-caption d-none d-md-block">
              <p>🌍 “Building scalable and modern web experiences.”</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Header
