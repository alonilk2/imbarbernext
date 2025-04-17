import { useState, useEffect, useRef } from "react";
import GoogleReview from "./GoogleReview";
import useWindowSize from "@/hooks/useWindowSize";

export default function Slideshow({ reviews }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isMobile = useWindowSize().width <= 768; // בדיקה אם המכשיר נייד
  const slidesPerView = isMobile ? 3 : 4;
  const maxIndex = Math.max(0, reviews.length - slidesPerView) - 1;
  const autoPlayInterval = useRef(null);

  const styles = {
    slideshow: {
      position: "relative",
      width: "100%",
      margin: "0 auto",
      overflow: "hidden",
    },
    slidesContainer: {
      display: "flex",
      transition: "transform 0.5s ease-in-out",
      width: isMobile ? "" : "100%",
    },
    slide: {
      flex: "0 0 25%",
      padding: "10px",
      boxSizing: "border-box",
    },
    card: {
      height: "200px",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
      padding: "20px",
    },
    nav: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      fontSize: "20px",
      zIndex: 1,
    },
    prevButton: {
      left: "10px",
    },
    nextButton: {
      right: "10px",
    },
    indicators: {
      display: "flex",
      justifyContent: "center",
      margin: "10px 0",
    },
    indicator: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      backgroundColor: "#ccc",
      margin: "0 5px",
      cursor: "pointer",
    },
    activeIndicator: {
      backgroundColor: "#333",
    },
  };

  // פונקציה למעבר לשקופית הבאה
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  // פונקציה למעבר לשקופית הקודמת
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  // פונקציה למעבר לשקופית ספציפית
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // הפעלת האנימציה האוטומטית
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayInterval.current = setInterval(() => {
        nextSlide();
      }, 3000); // מעבר כל 3 שניות
    }

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  // עצירת האנימציה האוטומטית כאשר העכבר נמצא מעל הסליידר
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div
      style={styles.slideshow}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={prevSlide}
        style={{ ...styles.nav, ...styles.prevButton }}
      >
        &gt;
      </button>

      <button
        onClick={nextSlide}
        style={{ ...styles.nav, ...styles.nextButton }}
      >
        &lt;
      </button>
    
      <div
        style={{
          ...styles.slidesContainer,
          transform:isMobile ? `translateX(${-465 + currentIndex * 370}px)` : `translateX(${-500 + currentIndex * 800}px)`,
        }}
      >
        {reviews?.map((review) => (
          <GoogleReview review={review} />
        ))}
      </div>

      <div style={styles.indicators}>
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.indicator,
              ...(index === currentIndex ? styles.activeIndicator : {}),
            }}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
