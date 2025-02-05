import React from 'react';
import './Contact.css';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "bcea51a5-117c-4026-bc80-261042c2fef5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    alert(res.message);
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h3>Connect with me</h3>
        <h1>Get in touch</h1>
        <p>
          I'd love to hear from you! If you have any questions, comments, or 
          feedback, please use the form below.
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={onSubmit} className="contact-form">
        <div className="contact-inputs">
          <input type="text" placeholder="Enter your name" name="name" required />
          <input type="email" placeholder="Enter your email" name="email" required />
        </div>
        <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
        <button type="submit" className="contact-submit">Submit now →</button>
      </form>
    </div>
  );
};

export default Contact;
