import React from "react";

export default function AboutUS() {
  return (
    <>
      <div class="container">
        <div id="ABOUTUS">
          <h1 class="bg-info text-center">ABOUT US</h1>
          <h3>Details Highlights</h3>
          <ul>
            <li>COVID-19 testing centre</li>
          </ul>
          <hr />
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="card">
              <img
                src={require("../assets/images/dr1.JPG")}
                height="310"
                alt="hod  image"
              />
              <div class="card-body">
                <h4 class="text-center">Dr.Ajit B.Lokare</h4>
                <p class="text-center">H.O.D of General Surgery department</p>
                <p class="text-center ">
                  Dr.Ajit B.Lokare have qualified through MS General Surgery.He
                  is specialist for General Sergery he is main H.O.D of the
                  department of general surgery who having 24 years experience
                </p>
                <input type="button" class="btn btn-primary" value="Profile" />
                <input
                  type="button"
                  class="btn btn-danger"
                  value="Read More..."
                  data-bs-toggle="modal"
                  data-bs-target="#mymodal"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="card">
              <img
                src={require("../assets/images/dr3.JPG")}
                height="310"
                alt="Dr. image"
              />
              <div class="card-body">
                <h4 class="text-center">Dr.Vasant Deshmukh</h4>
                <p class="text-center">Professor & Head</p>
                <p class="text-center ">
                  Dr.Vasant Anandrao Deshmukh have qualified through MS General
                  Surgery.He is specialist for General Sergery he is professor &
                  head of the department who having 27 years experience
                </p>
                <input type="button" class="btn btn-primary" value="Profile" />
                <input
                  type="button"
                  class="btn btn-danger"
                  value="Read More..."
                  data-bs-toggle="modal"
                  data-bs-target="#mymodal"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="card">
              <img
                src={require("../assets/images/dr4.JPG")}
                height="310"
                alt="DR.IMAGE"
              />
              <div class="card-body">
                <h4 class="text-center">Dr.Priyesh Patil</h4>
                <p class="text-center">Assistant Professor</p>
                <br />
                <p class="text-center ">
                  Dr.Priyesh A.Patil having qualified in MDS(Oral and
                  maxillofacial surgery ) and in department of dentistry also
                  they having 11 years 05 months experience
                </p>

                <input type="button" class="btn btn-primary" value="Profile" />
                <input
                  type="button"
                  class="btn btn-danger"
                  value="Read More..."
                  data-bs-toggle="modal"
                  data-bs-target="#mymodal"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="card">
              <img
                src={require("../assets/images/dr2.JPG")}
                height="310"
                alt=""
              />
              <div class="card-body">
                <h4 class="text-center">Dr.Gurav N.R.</h4>
                <p class="text-center">Associate Professor</p>
                <br />
                <p class="text-center ">
                  Dr.Gurav N.R. having qualified in Ph.D(Medical Biochemistry)
                  and in department of Biochemistry also they having 21 years
                  experience
                </p>
                <br />
                <input type="button" class="btn btn-primary" value="Profile" />
                <input
                  type="button"
                  class="btn btn-danger"
                  value="Read More..."
                  data-bs-toggle="modal"
                  data-bs-target="#mymodal"
                />
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div class="modal fade" id="mymodal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h3>
                  {" "}
                  Rajarshee Chattrapati Shahu Maharaj Government Medical College
                  and Chhatrapati Pramilatai Raje Hospital
                </h3>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div class="modal-body">
                This is Our CPR Hospital Staff.Our Staff is active on day and
                night We are providing you various services by our hospital and
                medical College
                <br />
                <br />
                <img
                  src={require("../assets/images/staff.JPG")}
                  height="300px"
                  width="450px"
                  alt="Cpr staff image"
                />
                <br />
                CPR Hospital, Dasara Chowk, Kavlapur, Kolhapur, Maharashtra
                416012 Phone: 0231 264 1583 Email:www.cprhospital@gmail.com
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
