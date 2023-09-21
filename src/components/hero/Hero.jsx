import React from "react";
import { contacts, hero_img } from "../../assets";

function Hero() {
  return (
    <div className="container hero d-flex">
      <div className="hero_left w-50">
        <h1 className="title">
          Quality cleaning <br /> for your home
        </h1>
        <p className="text">
          Condimentum mauris sit cursus amet id non neque pharetra <br />
          nulla ornare sed facilisis senectus dapibus nibh ultrices eget <br />
          suscipit aliquet et nulla magna lacus penatibus.
        </p>
        <div className="connect d-flex gap-3 justify-content-start align-items-center">
          <button className="btn btn-primary">Get a free quote</button>
          <img src={contacts} alt="" width={72} height={72} />
          <div className="num">
            <p className="call">Call us now</p>
            <p className="number">(414) 567 - 2109</p>
          </div>
        </div>
      </div>
      <div className="left">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
}

export default Hero;
