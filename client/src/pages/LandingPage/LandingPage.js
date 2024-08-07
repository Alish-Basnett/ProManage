import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import PartnerSection from "../../components/LandingPage/PartnerSection";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";

// Sample images (replace with your actual image URLs)
import John from "../../assets/images/JohnSnow.png";
import Dany from "../../assets/images/Dany.png";
import Arya from "../../assets/images/Arya.png";
import ParticlesComponent from "../../components/particles/particle";

const testimonials = [
  {
    quote: "Great app! It helped me organize my tasks efficiently.",
    author: "John Snow",
    image: John,
  },
  {
    quote: "Awesome features! Very user-friendly interface.",
    author: "Dany",
    image: Dany,
  },
  {
    quote: "Outstanding! I devote my success to Pro Manage!",
    author: "Arya Stark",
    image: Arya,
  },
  // Add more testimonials as needed
];

const LandingPage = ({ logo }) => {
  const userCountRef = useRef(null);
  const [userCount, setUserCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showPopup, setShowPopup] = useState(null);

  useEffect(() => {
    document.title = "Pro Manage"; // Set your desired title here
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (userCountRef.current) {
      observer.observe(userCountRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // useEffect(() => {
  //   if (isVisible) {
  //     const interval = setInterval(() => {
  //       setUserCount((prevCount) => {
  //         const newCount = prevCount + 4;
  //         return newCount <= 2300 ? newCount : 2300;
  //       });
  //     }, 2);

  //     return () => clearInterval(interval);
  //   }
  // }, [isVisible]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const openLoginPopup = () => {
    setShowPopup("login");
    document.body.classList.add("no-scroll"); // Add no-scroll class to body
  };

  const closePopup = () => {
    setShowPopup(null);
    document.body.classList.remove("no-scroll"); // Remove no-scroll class from body
  };

  const openSignupPopup = () => {
    setShowPopup("signup");
    document.body.classList.add("no-scroll"); // Add no-scroll class to body
  };

  return (
    <div className="landing-container">
      <div className="header">
        <img src={logo} alt="ProManage Logo" className="landing-logo" />
        <div className="nav-links">
          <Link to="/about" className="text-link">
            About
          </Link>
          <Link to="/contact" className="text-link">
            Contact
          </Link>
          <div className="button-group">
            <button className="btn nav-btn" onClick={openLoginPopup}>
              Login
            </button>
            <button className="btn signup-btn" onClick={openSignupPopup}>
              Sign Up
            </button>
            <button className="btn">
              <Link to={"/dashboard"}>Guest Login</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="content">
        <ParticlesComponent id="particles" />

        <h1>Welcome to Pro Manage</h1>
        <p>Manage your tasks efficiently and effectively</p>
        <div className="feature-icons">
          <div className="feature-icon">
            <i className="fas fa-tasks"></i>
            <p>Task Management</p>
          </div>
          <div className="feature-icon">
            <i className="fas fa-calendar-alt"></i>
            <p>Calendar Integration</p>
          </div>
        </div>
        <div ref={userCountRef} className="user-count-section">
          <h2>Join over</h2>
          {/* <div className="user-count">{userCount + " +"}</div> */}
          <div className="user-count">{"2300+"}</div>
          <h2>users managing their tasks with us!</h2>
        </div>
        <div className="call-to-action">
          <Link to="/features" className="btn cta-btn">
            Explore Features
          </Link>
          <Link to="/pricing" className="btn cta-btn">
            View Pricing
          </Link>
        </div>
        {/* <PartnerSection /> */}
        <div className="testimonials-container">
          <div className="testimonials-heading-container">
            <span className="testimonial-colon">"</span>
            <h2 className="testimonials-heading">
              What our famous users say about Pro Manage!
            </h2>
            <span className="testimonial-colon">"</span>
          </div>

          <div className="testimonials">
            <button className="carousel-btn left-btn" onClick={prevTestimonial}>
              &#10094;
            </button>
            <div className="testimonial">
              <p>{testimonials[currentTestimonial].quote}</p>
              <div className="testimonial-author">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].author}
                  className="rounded-image"
                />
                <p className="author">
                  {testimonials[currentTestimonial].author}
                </p>
              </div>
            </div>
            <button
              className="carousel-btn right-btn"
              onClick={nextTestimonial}
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
      {showPopup === "login" && (
        <div className="popup">
          <div className="popup-inner">
            <LoginPage onClose={closePopup} openSignup={openSignupPopup} />
          </div>
        </div>
      )}
      {showPopup === "signup" && (
        <div className="popup">
          <div className="popup-inner">
            <SignupPage onClose={closePopup} openLogin={openLoginPopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
