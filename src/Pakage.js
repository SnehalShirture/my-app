import React, { useState } from "react";
import PakageApi from "./PakageApi";

function Pakage() {
  let [pakageList, setPakageList] = useState(PakageApi);

  return (
    <>
      <div
        className="container"
        style={{ marginTop: "50px" }}
        id="product-section"
      >
        <h1 className="text-center">Packages</h1>
        <div className="row">
          {pakageList.map((place) => {
            return (
              <>
                <div className="col-md-4">
                  <div className="card">
                    <img src={place.images} />
                    <h3 className="text-center">{place.pakage_name}</h3>
                    
                    <div id="star">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-half"></i>
                    </div>
                    <div className="text-center" style={{margin:"0px 0px "}}>
                       {place.description} 
                    </div>
                    <h5 className="text-center">Price:-${place.pakage_price}</h5>
                    <button className="book-now-button">Book Now</button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Pakage;
