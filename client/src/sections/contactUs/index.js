import React, { useState } from "react";
import "./contactUs.css";
import API from "../../utils/api"



function ContactUs() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    address:"",
    city: "",
    state:"",
    zip:"",
    info:""
  });

  const handleOnChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log(formState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked")
    API.newInquiry({formState: formState}).then(res => {
      console.log(res)
    })
  }
  return (
    <div id="form" className="container">
      <div className="columns">
        <div className="column is-6 is-offset-3 ">
          <h1 className="title">Contact Us</h1>
          <hr className="contact-us-hr" />
          <div className="form box">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="name" name="name" onChange={handleOnChange} />
              </div>
            </div>

            <div className="field">
              <label className="label">Email Address</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  onChange={handleOnChange}
                />
                <span className="icon is-small is-left">
                  <i class="far fa-envelope"></i>
                </span>
              </div>
              <p className="help"><i class="fas fa-lock"></i> We do not send spam</p>
            </div>

            <div className="field">
              <label className="label">Phone Number</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="phone"
                  name="phone"
                  placeholder="111-111-1111"
                  onChange={handleOnChange}
                />
                <span className="icon is-small is-left">
                  <i class="far fa-envelope"></i>
                </span>
              </div>
            </div>
           
            <div className="field">
            <label className="label">Address</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  onChange={handleOnChange}
                />
                <span className="icon is-small is-left">
                <i class="fas fa-map-marker-alt"></i>
                </span>
              </div>
              
            </div>
            <div className="field columns is-variable is-1 is-mobile">
                <div className="control column is-5">
                  <input 
                  className="input"
                  type="text"
                  name="city"
                  placeholder="Tacoma"
                  onChange={handleOnChange}
                  />
                </div>
                <div className="control column is-3">
                  <input 
                  className="input"
                  type="text"
                  name="state"
                  placeholder="WA"
                  onChange={handleOnChange}
                  />
                </div>
                <div className="control column is-4">
                  <input className="input"
                  type="text"
                  name="zip"
                  placeholder="Zip Code"
                  onChange={handleOnChange}
                  />
                </div>
              </div>

            <div className="field">
              <label className="label">Additional Information</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="info"
                  placeholder=""
                  onChange={handleOnChange}
                ></textarea>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" onClick={handleSubmit}>Submit</button>
              </div>
              <div className="control">
                <button className="button is-link is-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
