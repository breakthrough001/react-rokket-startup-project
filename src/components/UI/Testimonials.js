import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonial = [
    {
      name: "Joe N.",
      review: "Love it so much!",
    },
    {
      name: "Kate D.",
      review: "Highly recommend",
    },
    {
      name: "Nicole H.",
      review: "I had the best experience!",
    },
  ];

  return (
    <div className='container testimonial__container mt-5'>
      <div className='row text-center'>
        <h6>{testimonial[0].review}</h6>
        <p>--{testimonial[0].name}</p>
      </div>
    </div>
  );
};

export default Testimonials;
