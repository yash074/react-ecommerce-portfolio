import React, { useEffect, useState } from "react";
import slider1 from "../assets/img/slider-1.jpeg";
import slider2 from "../assets/img/slider-2.jpeg";
import slider3 from "../assets/img/slider-3.jpeg";
import slider5 from "../assets/img/slider-5.jpeg";
import slider6 from "../assets/img/slider-6.jpeg";

const Slider = () => {
  const slides = [slider1, slider2, slider3, slider5, slider6];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div
        className="flex h-55 transition-transform duration-700 sm:h-82.5 lg:h-110"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full">
            <img src={slide} alt={`Fashion banner ${index + 1}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              current === index ? "w-7 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
