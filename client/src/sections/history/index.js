import React from "react";
import house1 from "../../assets/images/house1.jpg";
import "./history.css";

function History() {
  return (
    <div id="history" className="container">
      <h1 className="title">History</h1>
      <hr />
      <row className="columns">
        <p className="column is-6 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor
          ligula, ultricies eu metus sed, ornare congue augue. Cras non velit
          ex. Sed accumsan leo ut quam ornare, vel placerat orci dictum.
          Pellentesque blandit malesuada condimentum. Nullam vel purus sit amet
          ipsum egestas lacinia.
        </p>
        <figure className="column is-5 is-offset-1">
          <img className="image circle" src={house1} />
        </figure>
      </row>
    </div>
  );
}

export default History;
