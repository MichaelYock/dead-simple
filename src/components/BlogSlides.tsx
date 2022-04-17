import React, { useRef, useState, FC } from "react";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";


const SlideStyles = styled.div`
  height: 200px;
  background: red;
  
`;

const BlogSlides: FC = () => {
  
  
  return (
    <section className="">
      
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><SlideStyles></SlideStyles>Slide 1</SwiperSlide>
        <SwiperSlide><SlideStyles></SlideStyles>Slide 2</SwiperSlide>
        <SwiperSlide><SlideStyles></SlideStyles>Slide 3</SwiperSlide>
        <SwiperSlide><SlideStyles></SlideStyles>Slide 4</SwiperSlide>
        
      </Swiper>
      </section>
  );
      
      

}

export default BlogSlides
