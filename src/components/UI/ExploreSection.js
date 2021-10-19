import React from "react";
import "./ExploreSection.css";

const ExploreSection = () => {
  return (
    <div className='container mt-5'>
      <div className='row align-items-center'>
        <img className='col-6 p-0' src='assets/images/planet.png'></img>
        <div className='col-6'>
          <h1>EXPLORE</h1>
          <p>
            Have a planet you always wanted to visit but didn’t have the proper
            rocketship to go? Let us take care of that for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
