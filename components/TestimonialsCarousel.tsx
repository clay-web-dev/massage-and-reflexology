import React, { useState } from "react";
import Image from "next/image";
import Quote from "../assets/quote.svg";

const TestimonialsCarousel = () => {
  const slides = [
    {
      id: 1,
      content: {
        name: "Peter Soloman",
        location: "Hampstead",
        comment:
          "So precise you’d think they painted with lasers. Brilliantly perfect guys! Bravo!",
      },
    },
    {
      id: 2,
      content: {
        name: "Andy Kerr",
        location: "Stoke Newington",
        comment:
          "My whole 3 bedroom house perfectly painted in 1 week. Reasonably priced, and quite literally a perfect job.",
      },
    },
    {
      id: 3,
      content: {
        name: "Marie Ambrose",
        location: "Crouch End",
        comment:
          "A great experience from start to finish. Got on really well with Rob and Nico, their focus and work ethic was perfect. A great finish too. Very happy.",
      },
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const goToNextSlide = () => {
    setActiveSlide((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setActiveSlide((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel flex items-center justify-center space-x-4">
      <button
        className="carousel-arrow bg-gray-300 p-2 rounded-full"
        onClick={goToPreviousSlide}
      >
        &lt;
      </button>
      <div className="carousel-content text-center block">
        <Image
          alt="quote-open"
          className="quote-open"
          src={Quote}
          draggable="false"
        />
        <div>{slides[activeSlide].content.name}</div>
        <div>{slides[activeSlide].content.location}</div>
        <div>{slides[activeSlide].content.comment}</div>
      </div>
      <button
        className="carousel-arrow bg-gray-300 p-2 rounded-full"
        onClick={goToNextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default TestimonialsCarousel;
