/* eslint-disable jsx-a11y/img-redundant-alt */
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { React, useState } from "react";
import "./Cards.css";
import Axios from "axios";
import cors from "cors";
import { data } from "jquery";

function Cards() {
  const [sliders, setSliders] = useState("");

  var cors = require("cors");

  const getSliders = () => {
    Axios.get("http://yaman.omranhallak.com.tr/api/sliders.php").then(
      (response) => {
        setSliders(data.setup + " ... " + data.punchline);
      }
    );
  };
  return (
    <>
    <div style={{maxWidth: "600px", margin: "0 auto"}}>

      <Carousel style={{width: "100%", height: "auto"}}  className="carousel">
        <Carousel.Item style={{width: "100%", height: "auto"}} interval={2000}>
          <img style={{width: "100%", height: "auto"}}
            className="d-block mx-auto"
            src="https://i.imgur.com/4kZFFp9.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{width: "100%", height: "auto"}} interval={2000}>
          <img style={{width: "100%", height: "auto"}}
            className="d-block mx-auto"
            src="https://i.imgur.com/BuNGcJI.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{width: "100%", height: "auto"}} interval={2000}>
          <img style={{width: "100%", height: "auto"}}
            className="d-block mx-auto"
            src="https://i.imgur.com/UDBoRJn.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>

      <div class="card-deck">
        <div class="card">
          <img
            class="card-img-top"
            src="https://i.imgur.com/AMG4gMl.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Lale Bed</h5>
            <p class="card-text">Price is:</p>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="https://i.imgur.com/IqK8FMe.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Comfort Bed</h5>
            <p class="card-text">Price is: </p>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="https://i.imgur.com/8t98laF.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Natura Bed</h5>
            <p class="card-text">Price is: </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
