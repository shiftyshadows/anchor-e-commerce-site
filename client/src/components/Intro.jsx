import React from 'react';
import '../styles/Intro.css';
import bannerImage from '../images/banner-image.jpg';

const Intro = () => {
  return (
    <section
      className="intro"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "50vh", // Reduced height to half of the viewport
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "80%",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h1>Welcome to Anchor E-Commerce</h1>
        <p>Your one-stop shop for high-quality computer products!</p>
      </div>
    </section>
  );
};

export default Intro;
