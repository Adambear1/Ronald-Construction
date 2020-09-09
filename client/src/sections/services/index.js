import React from "react";
import house2 from "../../assets/images/house2.jpg";
import house3 from "../../assets/images/house3.jpg";
import house4 from "../../assets/images/house4.jpg";
import "./services.css";
import services from "../../assets/data/services.json";

function Services() {

      const servicesArr = []

      services.map(service => {
        if(service.photo === "house2"){
          const newService = {...service, photo: house2}
          servicesArr.push(newService)
        } else if(service.photo === "house3"){
          const newService = {...service, photo: house3}
          servicesArr.push(newService)
        }else if(service.photo === "house4"){
          const newService = {...service, photo: house4}
          servicesArr.push(newService)
        }
      })

  return (
    <div id="services" className="container">
      <h1 className="title">Services</h1>
      <hr />
      <div className="">
      <row className="columns">           
          {servicesArr.map(service => {
           return( <div>
            <div class="card column">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src={service.photo} alt="Placeholder image" />
              </figure>
            </div>
          
          <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{service.type}</p>
            </div>
          </div>
          <div class="content">
            {service.description}
          </div>
        </div>
        </div>
        </div>
           )
          })}
        
          
    
      </row>
      </div>
    </div>
  );
}

export default Services;
