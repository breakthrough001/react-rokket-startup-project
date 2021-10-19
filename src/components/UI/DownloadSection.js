import React from "react";
import DownloadText from "./DownloadText";
import DownloadButtons from "./DownloadButtons";

const DownloadSection = () => {
  return (
    <div className='container mt-5'>
      <div className='row align-items-center'>
        <DownloadText />
        <DownloadButtons />
      </div>
    </div>
  );
};

export default DownloadSection;
