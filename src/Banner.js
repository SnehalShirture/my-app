import React from 'react';

function Banner() {
  // Define the validateForm function
  function validateForm() {
    // Add your validation logic here
    console.log('Form validated!');
  }

  return (
    <>
      <div>
        <div>
          <img src="images/background.png" className="img-fluid" />

          <div className="overlay-text">
            <h1>Welcome to Tours Travels</h1>
            <h2>Visit Places <span id="changetext"></span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h2>50% Off</h2>
            <button className="btn btn-success" onClick={validateForm}>
              Book Now
            </button>
          </div>
        </div>
      </div>

      <div className="container" id="forms-details" style={{marginTop:"50px"}}>
        <div className="row">
          <div className="col-md-6">
            <img src="images/backgroundtry.png" alt="Brand Image" />
          </div>
          <div className="col-md-6">
            <form id="bookingForm">
              <div className="form-group">
                <label htmlFor="whereTo">Where to:</label>
                <select id="whereTo" name="whereTo">
                  <option value="place1">India</option>
                  <option value="place2">United-States</option>
                  <option value="place3">Vietnam</option>
                  <option value="place3">Singapore</option>
                  <option value="place3">Nepal</option>
                  <option value="place3">Bhutan</option>
                  <option value="place3">Srilanka</option>
                  <option value="place3">Others</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="numberOfPersons">How Many Persons:</label>
                <input
                  type="number"
                  id="numberOfPersons"
                  name="numberOfPersons"
                  min="1"
                />
              </div>
              <div className="form-group">
                <label htmlFor="startDate">Start Date:</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="endDate">End Date:</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  minLength="50"
                  maxLength="500"
                ></textarea>
              </div>
              <button type="button" onClick={validateForm}>
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
