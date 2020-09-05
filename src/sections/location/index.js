import React from "react";
import maps from "../../assets/images/maps.png";
import "./location.css";

function Location() {
  return (
    <div id="location"className="container">
      <h1 className="title">Service Location</h1>
      <hr />
      <row className="columns">
        <div className= "box">
        <figure className="col">
          <img className="image circle" src={maps} />
        </figure>
        </div>
        <div className="column is-6 is-offset-1">
        <h1 className="title is-4 location-title">Tacoma, WA</h1>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor
          ligula, ultricies eu metus sed, ornare congue augue. Cras non velit
          ex. Sed accumsan leo ut quam ornare, vel placerat orci dictum.
          Pellentesque blandit malesuada condimentum. Nullam vel purus sit amet
          ipsum egestas lacinia.
        </p>
        </div>
        
        
      
      </row>
    </div>
  );
}

export default Location;