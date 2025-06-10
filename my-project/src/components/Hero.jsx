import React, { useState, useEffect } from 'react';
import car1 from '../assets/fix.png';
import car2 from '../assets/prep.png';
import car3 from '../assets/repairs.png';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { GoDotFill } from 'react-icons/go';

function Hero() {
  const slides = [
    {
      id: 1,
      title: 'Welcome to Our Car Service',
      description: 'Your one-stop solution for all car maintenance and repair needs.',
      image: car1,
    },
    {
      id: 2,
      title: 'Expert Car Preparation',
      description:
        'Get your car ready for any journey with our comprehensive preparation services.',
      image: car2,
    },
    {
      id: 3,
      title: 'Quality Repairs You Can Trust',
      description:
        'Our skilled technicians provide top-notch repairs to keep your car in peak condition.',
      image: car3,
    },
  ];

  const [currIndex, setCurrIndex] = useState(0);

  const prevSlide = () => {
    setCurrIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // 🔁 Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currIndex]);

  return (
    <div className="max-w-[1400px] h-[100vh] w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currIndex].image})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-gray-50">
          <h1 className="text-xl font-bold mb-[10px]">{slides[currIndex].title}</h1>
          <p className="w-4/5 text-3xl  md:text-5xl font-bold py-3">
            {slides[currIndex].description}
          </p>
        </div>
      </div>

      {/* Left Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 left-5 text-2xl text-gray-400 cursor-pointer z-10"
        onClick={prevSlide}
      >
        <IoIosArrowBack size={30} />
      </div>

      {/* Right Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 right-5 text-2xl text-gray-400 cursor-pointer z-10"
        onClick={nextSlide}
      >
        <IoIosArrowForward size={30} />
      </div>

      {/* Dots */}
      <div className="absolute inset-x-0 z-30 bottom-[15%] flex justify-center py-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrIndex(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currIndex ? 'text-teal-600' : 'text-slate-800'
            }`}
          >
            <GoDotFill />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
