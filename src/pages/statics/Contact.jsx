import React from "react";

const ContactUs = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address:
          </label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;