"use client";
import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import "swiper/css";

interface Testimonial {
  id: number;
  name: string;
  role?: string;
  avatar?: string;
  quote: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 relative">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Customers Say
      </h2>

      <div className="relative">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          speed={800}
        >
          {testimonials.map(({ id, name, role, avatar, quote, rating }) => (
            <SwiperSlide key={id}>
              <Card className="h-[380px] flex flex-col justify-between p-6 shadow-lg transition-all duration-300">
                <CardContent className="flex flex-col items-center">
                  {avatar ? (
                    <Image
                      src={avatar}
                      alt={`${name} avatar`}
                      width={64}
                      height={64}
                      className="rounded-full object-cover mb-4"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 uppercase font-bold mb-4">
                      {name.charAt(0)}
                    </div>
                  )}

                  <h3 className="font-semibold text-lg text-center">{name}</h3>
                  {role && (
                    <p className="text-sm text-gray-500 text-center">{role}</p>
                  )}

                  {/* ⭐ Rating */}
                  <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={`${
                          i < rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 mt-6 text-center italic leading-relaxed">
                    “{quote}”
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="rounded-full p-3 bg-primary-foreground shadow hover:bg-gray-100 hover:text-black transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="rounded-full p-3 bg-primary-foreground shadow hover:bg-gray-100 hover:text-black transition"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
