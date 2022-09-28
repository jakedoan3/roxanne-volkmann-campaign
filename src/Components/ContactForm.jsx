import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  // const [zip, setZip] = useState("");
  const [thankYou, setThankYou] = useState(false)

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  // const handleZip = (e) => {
  //   setZip(e.target.value);
  // };

  const submitContact = async (e) => {
    e.preventDefault();
    // if (zip.length !== 5) {
    //   alert("Please enter a valid 5-digit ZIP Code");
    // } 
    
      setEmail("");
      // setZip("");
      setThankYou(true)
      console.log("Successful submit!")
  };

  return (
    <div >
      {thankYou? <p className="thankYou">Thank you for your support!</p>: 
      <form onSubmit={submitContact} className="contactForm">
        
          <label className="emailInput">
            <input
              className="emailInput"
              placeholder="Email*"
              type="email"
              value={email}
              onChange={handleEmail}
              name="email"
            />
          </label>
          {/* <label className="zipInput">
            <input 
            placeholder="ZIP*"
            type="number" 
            value={zip} 
            onChange={handleZip} 
            name="zip" />
          </label> */}
        
          <input 
          className="submitContactButton"
          type="submit" value="Submit" />
        
      </form>}
    </div>
  );
};

export default ContactForm;
