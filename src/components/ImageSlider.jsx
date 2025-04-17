import React, { useEffect, useState } from "react";
import "./styles/ImageSlider.css";

const images = [
    "https://res.cloudinary.com/dvonarg5v/image/upload/v1744913790/image1_ohkz32.jpg",
    "https://res.cloudinary.com/dvonarg5v/image/upload/v1744913785/image2_dnra1d.jpg",
    "image3.JPG",
    "https://res.cloudinary.com/dvonarg5v/image/upload/v1744913790/image4_mhdxst.jpg",
    "image5.JPG",
  ];
  
  const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageSlider;