import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react"; 
import "./services.css";
import serviceImg from "../assets/images/service.jpg";

// Service images
import s1 from "../assets/images/s1.jpg";
import s2 from "../assets/images/s2.jpg";
import s3 from "../assets/images/s3.jpg";
import s4 from "../assets/images/s4.jpg";
import s5 from "../assets/images/s5.jpg";
import s6 from "../assets/images/s6.jpg";

const Services = () => {
  const services = [
    { 
      img: s1, 
      title: "Car Service", 
      desc: "High-quality car maintenance and repair services to keep your vehicle running smoothly. Our expert technicians use advanced tools for accurate diagnostics. We ensure reliability, safety, and performance in every service." 
    },
    { 
      img: s2, 
      title: "Wheel Care", 
      desc: "Complete wheel alignment, balancing, and tire care for a safe driving experience. Proper wheel maintenance increases fuel efficiency and extends tire life. Drive smoother and safer with our professional care." 
    },
    { 
      img: s3, 
      title: "Fuel Delivery", 
      desc: "Get fuel delivered directly to your doorstep whenever you need it. No more worrying about running out on the road. Quick, reliable, and available round-the-clock for your convenience." 
    },
    { 
      img: s4, 
      title: "Oil Change", 
      desc: "Professional oil change services for better engine performance and longevity. Using premium oils, we help reduce wear and tear. Regular oil changes improve efficiency and extend your engine’s life. Trust our experts for smooth engine performance." 
    },
    { 
      img: s5, 
      title: "Car Inspection", 
      desc: "Thorough inspection services to ensure your car is safe and reliable. From brakes to suspension, we check every detail. Get peace of mind with our certified car inspection reports. Stay road-ready with our detailed evaluations." 
    },
    { 
      img: s6, 
      title: "Car Wash", 
      desc: "Premium car wash and detailing services to keep your vehicle shining. We use eco-friendly products for a spotless finish. Give your car the shine and freshness it deserves. Experience a new level of cleanliness and care." 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex + 3 < services.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const prevSlide = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>

      {/* Top Image */}
      <div className="services-top-image">
        <img src={serviceImg} alt="Services" />
      </div>

      {/* Services Slider */}
      <div className="services-slider">
        <button className="slider-btn left" onClick={prevSlide}>&#8249;</button>
        
        <div className="services-grid">
          {services.slice(currentIndex, currentIndex + 3).map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <img src={service.img} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <button className="slider-btn right" onClick={nextSlide}>&#8250;</button>
      </div>

      {/* Book Now Button */}
      <div className="book-now-container">
        <Link to="/booking">
          <button className="explore-btn">
            Book Now <ArrowRight className="arrow-icon" size={18} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
