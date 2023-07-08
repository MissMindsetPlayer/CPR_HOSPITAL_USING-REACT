import React from "react";

function ContactUs() {
  return (
    <div class="container">
      <h1 class="bg-info text-center" id="CONTACTUS">
        CONTACT US
      </h1>
      <b style={{ fontSize: "20px" }}>
        Rajarshi Chhatrapati Shahu Maharaj Government Medical college and CPR
        hospital
      </b>
      <br></br>
      <b>Address :</b>Bhausinghaji Road,Dasara Chowk,Kolhapur District.
      <br></br>
      <b>Pincode :</b> 41002 Maharashtra(INDIA)
      <br></br>
      <b>Tel :</b>0231-2641583
      <br></br> <b>Fax :</b>0231-2645279
      <br></br>
      <b>Email :</b>rcsmlib@yahoo.in
      <section id="ContactUs">
        <section class="row">
          <div class="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3821.5081507980053!2d74.2234695!3d16.7014785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1007309fe0437%3A0xb39375d693bfeff9!2sChhatrapati%20Pramila%20Raje%20Hospital%20Rd%2C%20Kavlapur%2C%20Kolhapur%2C%20Maharashtra%20416002!5e0!3m2!1sen!2sin!4v1687315599582!5m2!1sen!2sin"
              width="100%"
              height="600"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div class="col-lg-5" style={{ border: "solid thick black" }}>
            <form>
              <h2>
                <b>Contact Form</b>
              </h2>
              <hr />
              <label>First Name:</label>
              <input type="text" placeholder="Enter your Name" />
              <br />
              <br />

              <label>Last Name:</label>
              <input type="text" placeholder="Enter last Name" />
              <br />
              <br />

              <label>Mobile No.:</label>
              <input type="text" placeholder="Enter Mobile No." />
              <br />
              <br />

              <label>Email Id :</label>
              <input type="email" placeholder="Enter Email Id" />
              <br />
              <br />

              <label>Gender:</label>
              <label>
                <input type="radio" name="gender" />
                Male
              </label>
              <label>
                <input type="radio" name="gender" />
                Female
              </label>
              <br />
              <br />

              <label class="bg-sanu">Address:</label>
              <br />
              <textarea
                class="form-control"
                rows="5"
                placeholder="Enter Detailed Address Here"
              ></textarea>
              <br />
              <br />
              <input type="submit" />
              <input type="reset" />
              <br />
            </form>
          </div>
          <br />
          <br />
          <br />
        </section>
      </section>
    </div>
  );
}

export default ContactUs;
