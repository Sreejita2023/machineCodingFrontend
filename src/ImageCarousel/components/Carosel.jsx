import React, { useState, useRef, useEffect } from "react";
import "../index.css";

function Carosel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselBoxRef = useRef();
  const intervalRef = useRef(null);

  const getSlidesInfo = () => {
    const carouselBox = carouselBoxRef.current;
    const slides = carouselBox.children;
    const count = slides.length;
    return { count, slides };
  };

  // Update data-active attribute when currentIndex changes
  useEffect(() => {
    const { slides, count } = getSlidesInfo();
    // Set the initial active slide
    Array.from(slides).forEach((slide, index) => {
      slide.setAttribute("data-active", index === currentIndex);
    });

    // Start the interval
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        return prev === count - 1 ? 0 : prev + 1;
      });
    }, 3000);

    // Cleanup on unmount
    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

  // Common function to update index
  const updateIndex = (direction) => {
    const { count } = getSlidesInfo();
    setCurrentIndex((prev) => {
      if (direction === "prev") {
        return prev === 0 ? count - 1 : prev - 1;
      } else if (direction === "next") {
        return prev === count - 1 ? 0 : prev + 1;
      }
      return prev;
    });
  };

  const handlePrev = () => {
    updateIndex("prev");
  };

  const handleNex = () => {
    updateIndex("next");
  };
  const handleIndex = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="carousel">
      {currentIndex}
      <section
        onMouseEnter={() => clearInterval(intervalRef.current)}
        onMouseLeave={() => {
          setCurrentIndex((prev) => {
            const carouselBox = carouselBoxRef.current;
            const count = carouselBox.children.length;
            return prev === count - 1 ? 0 : prev + 1;
          });
        }}
        className="box"
        ref={carouselBoxRef}
        tabIndex={0}
      >
        {children}
      </section>
      <button class="prev" onClick={handlePrev}>
        Prev
      </button>
      <button class="nex" onClick={handleNex}>
        Next
      </button>
      <div class="slideBox">
        {Array.from(children).map((child, index) => {
          return <div onClick={() => handleIndex(index)}>{index}</div>;
        })}
      </div>
    </div>
  );
}

export default Carosel;
