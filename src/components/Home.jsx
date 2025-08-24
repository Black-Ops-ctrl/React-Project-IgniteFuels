import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; 
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animation occurs only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="home-container">
      {/* ✅ Navbar hat gaya, ab sirf main section hai */}

      {/* Main Section */}
      <div className="main-section" data-aos="fade-up">
        <h1>Get services at your Doorstep</h1>
        <p>
          Introducing Pakistan’s first-ever Fuel Delivery App – a game changer in
          convenience and reliability. No more waiting in long queues at petrol
          stations; now you can get high-quality fuel and multiple services delivered
          right to your doorstep. Whether at home or at work, with just a few taps,
          you’ll enjoy fast, safe, and professional service like never before.
          Experience the future of fuel delivery with unmatched excellence and ease.
        </p>

        {/* Explore Services Button */}
        <Link to="/services">
          <button className="explore-btn" data-aos="zoom-in">
            Explore Services <ArrowRight className="arrow-icon" size={18} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
