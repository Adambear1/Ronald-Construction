import React, { useState } from "react";
import "./contactUs.css";

function ContactUs() {
  const [formState, setformState] = useState({});

  // const handleOnChange = (e) => {
  //   setFormState({ ...formState, [e.target.name]: e.target.value });
  //   console.log(formState);
  // };
  return (
    <div id="form" className="container">
      <div className="columns">
        <div className="column is-6 is-offset-3 ">
          <h1 className="title">Contact Us</h1>
          <hr />
          <div className="form box">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Text input" />
              </div>
            </div>

            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Text input"
                  // value="bulma"
                />
                <span className="icon is-small is-left">
                  <i class="far fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <p className="help">This username is available</p>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email input"
                  value="hello@"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <label className="label">Address</label>
            <div className="field is-grouped">
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email input"
                  value="hello@"
                />
                <input
                  className="input"
                  type="email"
                  placeholder="Email input"
                  value="hello@"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Subject</label>
              <div className="control">
                <div className="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                ></textarea>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" />I agree to the{" "}
                  <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="radio">
                  <input type="radio" name="question" />
                  Yes
                </label>
                <label className="radio">
                  <input type="radio" name="question" />
                  No
                </label>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
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
