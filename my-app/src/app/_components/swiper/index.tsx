"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  title: string;
  imageUrl: string;
  author: string;
  date: string;
}

interface SwiperComponentProps {
  slides: Slide[];
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ slides }) => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="h-auto mx-auto mb-6 text-2xl text-medium ml-[200px]">
        Related articles
      </h1>
      <Swiper
        spaceBetween={-170}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-[500px] h-auto object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
              />
              <p className="mt-4 text-center text-gray-500 text-sm">
                POST BY {slide.author} - {slide.date}
              </p>
              <h3 className="text-lg font-semibold text-center">
                {slide.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
