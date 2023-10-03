import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/mis-resenas.jpg';
import Image2 from '../../assets/restaurantes-visitados.png';
import Image3 from '../../assets/top-10.png';
import {GrNext} from 'react-icons/gr';
import {MdOutlineArrowBackIos} from 'react-icons/md';

const images = [
  { src: Image1, link: '/' },
  { src: Image2, link: '/' },
  { src: Image3, link: '/' },
];

const CategoriasDsk = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="p-2 rounded-lg w-full mb-5">
      <div className="flex justify-center items-center gap-6">
        <button
          className="bg-white h-8  text-2xl  text-black rounded hover:bg-zinc-300 transition-colors duration-300"
          onClick={prevSlide}
        >
          <MdOutlineArrowBackIos/>
        </button>
        <div className="relative w-5/12 h-64 gap-4">
          <Link to={currentImage.link}>
            <img
              src={currentImage.src}
              alt={`Imagen ${currentIndex + 1}`}
              className="w-full h-full rounded-lg transform transition-all duration-300 hover:scale-105"
            />
          </Link>
        </div>
        <button
          className="bg-white h-8 p2 text-2xl   text-black rounded hover:bg-zinc-300 transition-colors duration-300"
          onClick={nextSlide}
        >
          <GrNext/>
        </button>
      </div>
    </div>
  );
};

export default CategoriasDsk;
