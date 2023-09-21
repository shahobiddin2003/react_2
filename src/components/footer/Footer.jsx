import React from "react";
import "./footer.scss";
import { logo } from "../../assets";
function Footer() {
  return (
    <div>
      <div className="container d-flex justify-content-between gap-5">
        <div className="quality">
          <h3 className="title">
            Quality cleaning for <br /> your home
          </h3>
          <p className="text">
            Lorem ipsum dolor sit amet cteturdo <br /> adipiscing elit, sed do
            eiusmo.{" "}
          </p>
          <div className="cells d-flex gap-3">
            <span className="cell rounded-2"></span>
            <span className="cell rounded-2"></span>
            <span className="cell rounded-2"></span>
            <span className="cell rounded-2"></span>
            <span className="cell rounded-2"></span>
          </div>
        </div>
        <div className="contact">
          <h4 className="title">Contact us</h4>

          <p className="text">
            1827 Nickel Road, Los Angeles, <br />
            CA, 90017, United States <br />
            (414) 567 - 2109 <br />
            contact@cleaning.com
          </p>
        </div>
        <div className="hours">
          <h5 className="title">Monday to Friday</h5>
          <p className="text">6:00am - 9:00pm</p>

          <h5 className="title">Monday to Friday</h5>
          <p className="text">6:00am - 9:00pm</p>
        </div>
        <div className="estimate">
          <h3 className="title">Get a free estimate</h3>
          <p className="number">(414) 567 - 2109</p>
          <p className="text">
            Lorem ipsum dolor sit amet pariatur <br /> temporibus maiores nobis
            enim dignissimos, consequatur
          </p>
          <button className="estimate_btn btn btn-primary rounded-4">
            Request a free quote
          </button>
        </div>
      </div>
      <div className="container">
        <hr />
      </div>
      <div className="bottom_footer container py-4 d-flex justify-content-between">
        <div className="logo">
          <img src={logo} alt="" className="logo_img" />
        </div>
        <p className="copyright">
          Copyright © Cleaning X | Designed by{" "}
          <a href="google.com" className="link">
            {" "}
            BRIX Templates{" "}
          </a>{" "}
          - Powered by
          <a href="google.com" className="link">
            Webflow - Licenses
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
