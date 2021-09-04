/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './ContactForm.css';

export default function ContactForm() {
  return (
    <div className="contactForm">
      <div className="form-group">
        <div className="m-7">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="apikey"
              value="f19a70e1-bcb7-4f67-8342-8183190fc3ff"
            />
            <input
              type="hidden"
              name="subject"
              value="New Submission from Web3Forms"
            />
            <input
              type="hidden"
              name="redirect"
              value="https://sibyl-portfolio.netlify.app"
            />

            <div className="mb-6">
              <label> Name </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name here (Optional)"
              />
            </div>
            <div className="mb-6">
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email here (Optional)"
              />
            </div>
            <div className="mb-6">
              <label>Your message</label>
              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Your message here (Required)"
                required
              />
            </div>
            <div className="mb-6">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
