import React from "react";

function Home() {
  return (
    <div class="container">
      <p>
        Rajarshee Chattrapati Shahu Maharaj Government Medical College and
        Chhatrapati Pramilatai Raje Hospital is a medical college and affiliate
        hospital located in Kolhapur, India. It was founded in the year 2000 and
        is affiliated to the Maharashtra University of Health Sciences (MUHS),
        Nashik. The college is recognized by the Medical Council of India (MCI),
        New Delhi for medical education in India.
      </p>

      <div class="container">
        <div class="carousel slide" id="mainslider" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              class="active"
              data-bs-slide-to="0"
              data-bs-target="#mainslider"
            ></button>
            <button
              type="button"
              data-bs-slide-to="1"
              data-bs-target="#mainslider"
            ></button>
            <button
              type="button"
              data-bs-slide-to="2"
              data-bs-target="#mainslider"
            ></button>
            <button
              type="button"
              data-bs-slide-to="3"
              data-bs-target="#mainslider"
            ></button>
            <button
              type="button"
              data-bs-slide-to="4"
              data-bs-target="#mainslider"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
              <img
                src={require("../assets/images/CPR14.JPG")}
                alt="IMAGE1"
                class="w-100"
                height="350"
              />
            </div>

            <div class="carousel-item " data-bs-interval="2000">
              <img
                src={require("../assets/images/banner2.JPG")}
                alt="IMAGE 2"
                class="w-100"
                height="350"
              />
            </div>

            <div class="carousel-item" data-bs-interval="2000">
              <img
                src={require("../assets/images/CPR3.JPG")}
                alt="IMAGE 3"
                class="w-100"
                height="350"
              />
            </div>

            <div class="carousel-item" data-bs-interval="2000">
              <img
                src={require("../assets/images/banner1.JPG")}
                alt="image 4"
                class="w-100"
                height="350"
              />
            </div>

            <div class="carousel-item" data-bs-interval="2000">
              <img
                src={require("../assets/images/CPR17.JPG")}
                alt=""
                class="w-100"
                height="350"
              />
            </div>
          </div>
          <button
            type="button"
            class="carousel-control-prev"
            data-bs-slide="prev"
            data-bs-target="#mainslider"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>

          <button
            type="button"
            class="carousel-control-next"
            data-bs-slide="next"
            data-bs-target="#mainslider"
          >
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Home;
