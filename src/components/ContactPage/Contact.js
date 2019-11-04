import React from "react";
import Title from "./../reusable/Title";

export default function Contact() {
  return (
    <section className="py-5 container">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form
            className="mt-5"
            action="https://formspree.io/mqkzveab"
            method="POST"
          >
            {/* first */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="Enter Name"
              />
            </div>

            {/* email */}
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter Email"
              />
            </div>

            {/* subject */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Enter Subject"
              />
            </div>

            {/* text message */}
            <div className="form-group">
              <textarea
                name="message"
                rows="10"
                className="form-control"
                placeholder="Enter message"
              ></textarea>
            </div>

            {/* submit */}
            <div className="form-group mt-3">
              <input
                type="submit"
                className="form-control bg-primary text-white"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
