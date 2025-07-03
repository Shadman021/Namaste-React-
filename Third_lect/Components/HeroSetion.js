import React, { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const slideRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    const slides = slideRef.current?.querySelectorAll("img");
    if (!slides) return;
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    const slides = slideRef.current?.querySelectorAll("img");
    if (!slides) return;
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slides = slideRef.current?.querySelectorAll("img");
    if (!slides) return;
    slides.forEach((img, index) => {
      img.style.display = index === slideIndex ? "block" : "none";
    });
  }, [slideIndex]);

  return (
    <>
      <h1 className="text-3xl font-bold">
      This is home page!
    </h1>
    <div className="slider">
      <div className="slide" ref={slideRef}>
        <img src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg" alt="img1" />
        <img src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg" alt="img2" />
        <img src="https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg" alt="img3" />
        <img src="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg" alt="img4" />
      </div>
      <div className="btn">
        <button className="prev" onClick={prevSlide}>&#x2039;</button>
        <button className="next" onClick={nextSlide}>&#x203A;</button>
      </div>
       
    </div>
  
    </>
  );
};

export default HeroSection;