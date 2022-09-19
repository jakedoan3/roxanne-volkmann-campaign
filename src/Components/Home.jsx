import React from "react";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <div className="home">
      <div className="homeHeader">Home</div>

      <div className="smallForm">
        <p className="homeIntro">
          I have been a resident of Edgewater over half of my life. I've raised
          my family here. <br />
          Public safety, housing, and women's rights are <br />
          I am running to" <br />
          Roxanne Volkmann Edgewater Mom, Resident, and Candidate
        </p>
        <p className="homeJoin">Join our campaign!</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
