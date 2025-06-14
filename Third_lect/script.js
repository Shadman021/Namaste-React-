// import React from "react";
import ReactDOM from "react-dom/client";
import React, { useEffect, useRef, useState } from "react";
// Navbar
//   logo
//   navItems
// Search
//   searchBar
//   button
// HeroSection
//   cards
// Offers
//   carasol
// Footer

const Navbar = () => {
    return (<div className="navbar">
        <div className="logo">
            <img className="logoImg" src="https://marketplace.canva.com/EAGK_nqghyY/1/0/1600w/canva-green-and-yellow-illustrative-catering-food-logo-1eeM9ihgRqY.jpg" alt="Logo" />
        </div>
        <div className="navList">
            <a href="#">Home</a>
            <a href="#">Restaurant</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
    </div>)
}

const Search = () => {
    return (<div className="search">
        <div >
            <input type="text" placeholder="Search.." className="searchBar"></input>
        </div>
        <button type="submit" className="searchBtn">Search</button>
    </div>)
}


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
    <div className="slider">
      <div className="slide" ref={slideRef}>
        <img src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg" alt="img1" />
        <img src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg" alt="img2" />
        <img src="https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg" alt="img3" />
        <img src="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg" alt="img4" />
      </div>
      <button className="prev" onClick={prevSlide}>&#x2039;</button>
      <button className="next" onClick={nextSlide}>&#x203A;</button>
    </div>
  );
};
const App = () => {

    return (
        <div>
            <Navbar />
            <Search />
            <HeroSection />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)


// React.createElement => ReactElement-JS oblect => HTML Elemet(render)
// const heading = React.createElement("div", {}, "This is a heading🚀")

// const JSXheading = () => (
//     <div>
//     {heading}
//  <h1>this is updated jsx</h1>
//  {heading}
//  </div>
// )

//JSX => Babel transpiles it to React.createElement => reactElement-JS Object => HTML Elmenet(render)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<JSXheading />);
