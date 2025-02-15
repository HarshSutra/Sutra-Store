import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";

const slides = [assets.sale, assets.seasonSale, assets.fashionSale];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative m-10 rounded-2xl">
      <div className="h-150 relative">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt="Slide"
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center px-10 text-white text-6xl">
        <button onClick={previousSlide} className="focus:outline-none">
          ❮
        </button>
        <button onClick={nextSlide} className="focus:outline-none">
          ❯
        </button>
      </div>

      <div className="absolute bottom-5 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              i === current ? "bg-white scale-125" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
