import React from "react";
import "./testimonial.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <section className="testimonial container section ">
      <h2 className="section__title">My clients say</h2>
      <span className="section__subtitle">Testimonial</span>
      <Swiper
        className="testimonial__container"
        grabCursor
        spaceBetween={24}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        // slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        mousewheel={false}
        scrollbar={false}
        effect="fade"
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />

              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
