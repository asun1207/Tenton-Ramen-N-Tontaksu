import React from "react";
import donburiImg from "../assets/images/donburi.jpg";
import teppanImg from "../assets/images/teppan.jpg";
import udonImg from "../assets/images/udon.jpg";

function Gallery() {
  return (
    <section id="gallery" className="container py-5">
      <h2 className="text-center">Gallery</h2>
      <div className="row">
        <div className="col-md-4">
          <img src={donburiImg} alt="Donburi" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={teppanImg} alt="Teppan Tonkatsu" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={udonImg} alt="Seafood Tempura Udon" className="img-fluid" />
        </div>
      </div>
      <a className="icon-link" href="https://www.google.com/maps/place/Tenton+Ramen+N+Tonkatsu/@49.328765,-123.163503,17z/data=!3m1!4b1!4m6!3m5!1s0x54866fd1e6cebcfd:0x3fe394c193acc54d!8m2!3d49.3287615!4d-123.1609334!16s%2Fg%2F11j1s3n4kp?entry=ttu" target="_blank" rel="noopener noreferrer">
        See More
        <svg className="bi" aria-hidden="true">
          <use xlinkHref="#arrow-right"></use>
        </svg>
      </a>
    </section>
  );
}

export default Gallery;
