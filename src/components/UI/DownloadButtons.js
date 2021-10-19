import React from "react";
import "./DownloadButtons.css";

const DownloadButtons = () => {
  return (
    <div className='col-6'>
      <a href='#'>
        <img className='download__btn' src='./assets/images/apple-button.png' />
      </a>
      <a href='#'>
        <img
          className='download__btn'
          src='./assets/images/google-button.png'
        />
      </a>
    </div>
  );
};

export default DownloadButtons;
