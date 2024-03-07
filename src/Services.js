import React from "react";

function Services() {
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "50px" }}
        id="product-section"
      >
        <h1 class="text-center ">Services</h1>
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <img src="images/Hotels-removebg-preview.png" alt="" />
              <h3 class="text-center">Affordable-Hotels</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
                mollitia!
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <img src="images/food_and_drinks_-removebg-preview.png" alt="" />
              <h3 class="text-center">Food And Drinks</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
                mollitia!
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <img src="images/Safety-removebg-preview.png" alt="" />
              <h3 class="text-center">Safety Check</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
                mollitia!
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <img src="images/Callling_supports-removebg-preview.png" alt="" />
              <h3 class="text-center">24 hours calling facilty</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
                mollitia!
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <img src="images/Insurance-removebg-preview.png" alt="" />
              <h3 class="text-center">Insurance Add on</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
                mollitia!
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <img
                src="images/pngtree-dfree_taxi-removebg-preview.png"
                alt=""
              />
              <h3 class="text-center">Free taxi to Airport</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
                mollitia!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div
        className="container"
        style={{
          marginTop: "50px",
          borderRadius: "20px",
          borderColor: "black",
        }}
      >
        <h1 className="text-center">About us</h1>
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-md-6">
            <img
              src="images/neom-V8w0gSmxajY-unsplash.jpg"
              className="img-fluid"
              alt="About Us Image"
            />
          </div>
          <div className="col-md-6">
            <ul>
              <li>
                {" "}
                <h5>Establishment:</h5> Adventure Horizon, a leading tour and
                travel company, was founded in 2010
              </li>
              <li>
                <h5>Mission:</h5> Committed to delivering exceptional travel
                experiences and creating lasting memories for our clients.
              </li>
              <li>
                <h5>Diversity:</h5> Our itineraries cover a wide range of
                destinations, from awe-inspiring landscapes to immersive
                cultural experiences.
              </li>
              <li>
                <h5>Customer-Centric:</h5> We prioritize customer satisfaction,
                offering unique adventures that go beyond the ordinary.
              </li>
              <li>
                <h5>Invitation:</h5> Join us on an adventure where every moment
                is a new and exciting discovery.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End of About Us */}

      {/* Footer Section */}
      <div className="jumbotron">
        <div className="container" id="footer">
          <div className="row">
            <div className="col-md-3">
              <h4>Address</h4>
              <p>XYZ Street, Pune</p>
              <p>Contact No- 221-896490</p>
              <p>xyz@gmail.com</p>
            </div>
            <div className="col-md-3">
              <h4>Useful Links </h4>
              <ul>
                <li>
                  <a href="#" style={{ color: "rgb(233, 167, 167)" }}>
                    {" "}
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "rgb(233, 167, 167)" }}>
                    {" "}
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "rgb(233, 167, 167)" }}>
                    {" "}
                    Contact us{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Our Services </h4>
              <ul>
                <li>
                  <a href="#" style={{ color: "rgb(233, 167, 167)" }}>
                    {" "}
                    Shirts
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "rgb(233, 167, 167)" }}>
                    {" "}
                    Electronics
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "rgb(233, 167, 167)" }}>
                    {" "}
                    Pants{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Social Links </h4>
              <ul id="socialicons">
                <li>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container text-center">
            <p>&copy; Copyright | All Rights are Reserved</p>
          </div>
        </div>
      </div>
      {/* End of the Footer Section */}

      {/* Login modal */}
      <div className="modal" id="loginmodal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4>Login</h4>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  Email Id -<input type="email" class="form-control" />
                </div>
                <div class="form-group">
                  Password -<input type="password" class="form-control" />
                </div>
                <div class="form-group">
                  <button type="Submit" class="btn btn-success">
                    Login
                  </button>
                </div>
              </form>
              <p>
                <a href="#regmodal" data-toggle="modal" data-dismiss="modal">
                  Click Here To Register Yourself
                </a>
              </p>
            </div>
            <div class="modal-footer text-right">
              <button class="btn btn-danger btn-sm" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End of Login modal */}

      {/* Registration modal */}
      <div className="modal fade" id="regmodal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Registration</h4>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  Full Name -<input type="text" className="form-control" />
                </div>
                <div class="form-group">
                  <label for="dob">Date of Birth</label>
                  <input type="date" id="dob" class="form-control" />
                </div>
                <div className="form-group">
                  Email-Id -<input type="email" className="form-control" />
                </div>
                <div className="form-group">
                  Password -<input type="password" className="form-control" />
                </div>
                <div class="form-group">
                  <label for="gender">Gender</label>
                  <select id="gender" class="form-control">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  Contact -<input type="tel" className="form-control" />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-success">
                    Register
                  </button>
                </div>
              </form>
              <p>
                Already Have an Account ?{" "}
                <a href="#loginmodal" data-toggle="modal" data-dismiss="modal">
                  Sign In
                </a>
              </p>
            </div>
            <div className="modal-footer text-right">
              <button className="btn btn-danger btn-sm" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End of Registration modal */}

      {/* JavaScript script */}
      {/* JavaScript script */}
      <script>
        {function validateForm() {
          var whereTo = document.getElementById("whereTo").value;
          var numberOfPersons =
            document.getElementById("numberOfPersons").value;
          var startDate = document.getElementById("startDate").value;
          var endDate = document.getElementById("endDate").value;
          var description = document.getElementById("description").value;

          if (
            whereTo &&
            numberOfPersons &&
            startDate &&
            endDate &&
            description
          ) {
            alert("Booking successful!");
          } else {
            alert("Please fill in all fields.");
          }
        }}
      </script>
    </>
  );
}

export default Services;
