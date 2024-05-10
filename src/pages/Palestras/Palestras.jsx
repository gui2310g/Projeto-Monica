import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { Lecture } from "../../assets/js/ImageContents";

import { Carrousel } from "./PalestrasStyled.jsx";

const Lectures = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide + 1) % Lecture.length);
  }

  const prevSlide = () => {
    setSlide((slide - 1 + Lecture.length) % Lecture.length);
  }

  return (
    <>
      <Carrousel>
        
        <iframe src="https://www.youtube.com/embed/G3exmSoD6UA?si=2bGWLjMBKsBkEzFH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        
        <FaArrowLeft className="arrow arrow-left" onClick={prevSlide} />
        
        {Lecture.map((image, index) => {
          return (
            <img
              key={index}
              src={image.image}
              alt="Carrousel imagens"
              className={slide === index ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        
        <FaArrowRight className="arrow arrow-right" onClick={nextSlide} />
        <span>
          {Lecture.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => setSlide(index)}
                className={slide === index ? "indicator" : "indicator indicator-inactive"}
              >
              </button>
            );
          })}
        </span>
      </Carrousel>
    </>
  );
};

export default Lectures;
