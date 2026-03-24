import React, { useState } from 'react'
 

const Contact = () => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!name || !whatsapp || !message) {
      alert("Please fill all fields");
      return;
    } 
    const formattedNumber = whatsapp.replace(/[^0-9]/g, "");
    const text = `Hello, my name is ${name}. ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappLink = `https://wa.me/${formattedNumber}?text=${encodedText}`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <section className="contact" id="contact">
      <div className="heading">
        <h2>Contact</h2>
        <span>Send Message on WhatsApp</span>
      </div>
      <div className="contact-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your WhatsApp Number (e.g., 923XXXXXXXXX)"
            required
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <textarea
            cols="30"
            rows="5"
            placeholder="Write Message Here..."
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input
            type="button"
            value="Send on WhatsApp"
            className="contact-button"
            onClick={handleSendMessage}
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
