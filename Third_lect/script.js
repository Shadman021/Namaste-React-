// import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import HeroSection from "./Components/HeroSetion";

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