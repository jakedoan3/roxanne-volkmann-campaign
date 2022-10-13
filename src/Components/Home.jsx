import React from "react";
import ContactForm from "./ContactForm";
import PhotoBar from "./PhotoBar";

const Home = () => {
  return (
    <div className="home">
      <div className="homeHeader">
        <PhotoBar />
      </div>

      <div className="smallForm">
        <p className="homeIntro">
          "I have been a resident of Edgewater over half of my life. I've raised
          my family here. <br /> Public safety, housing, and women's rights are{" "}
          <br />I am running to"
          <br />
          Roxanne Volkmann Edgewater <br />
          Mom, Resident, and Candidate
        </p>

        <p className="homeJoin">Join our campaign!</p>
        <ContactForm />
        <a href="https://secure.actblue.com/" className="donate-button">
            Donate
          </a>
      </div>
    </div>
  );
};

export default Home;
