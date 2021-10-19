import React from "react";
import { Button } from "reactstrap";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className='hero d-flex align-items-center'>
      <div className='container'>
        <div className='row '>
          <h1 className='headline'>SPACE ADVENTURES FOR EVERYONE</h1>
        </div>
        <div className='row mt-3'>
          <Button className='btn btn__primary'>Sign up App</Button>
          <Button className='btn btn__ghost'>Sign up Google</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
