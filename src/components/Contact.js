import React, { useState } from "react";

export default function Contact() {
  // state for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // update form data on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // freespree endpoint
    const formSpreeEndpoint = "https://formspree.io/f/xnqeadpk";

    //  senf form data to formspree
    fetch(formSpreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Formapree response:", data);
        // Reset the form after submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting form", error);
      });
  };

  return (
    <>
      <div className="contact-me">
        <h1 className="bottom-contact-text contact-page-header">
          Lets talk about your project
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit">
            <b>Send Message</b>
          </button>
        </form>
      </div>
    </>
  );
}
// https://formspree.io/f/xnqeadpk
