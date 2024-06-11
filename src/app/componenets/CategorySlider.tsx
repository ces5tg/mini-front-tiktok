// components/CategorySlider.js
"use client"
import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const categories = [
  'Category 1',
  'Category 2',
  'Category 3',
  'Category 4',
  'Category 5',
  'Category 6',
  'Category 1',
  'Category 2',
  'Category 3',
  'Category 4',
  'Category 5',
  'Category 6',
];

const CategorySlider = () => {
  const sliderRef = useRef(null);
  const itemWidth = 160; // Ancho del ítem + margen/padding

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -itemWidth * 3, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: itemWidth * 3, behavior: 'smooth' });
  };

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <button onClick={scrollLeft} className="p-2 bg-gray-200 rounded-full">
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button onClick={scrollRight} className="p-2 bg-gray-200 rounded-full">
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
      <div
        ref={sliderRef}
        className="flex space-x-4 overflow-hidden scrollbar-hide p-4"
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center text-lg font-semibold"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;