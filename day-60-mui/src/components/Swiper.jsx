import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";
import images from "../data/images";
import Thumbs from "swiper";

const SwiperUI = function () {
  const swiperRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = images.map((image, index) => {
    return (
      <SwiperSlide key={index}>
        <img src={image.url} alt="slider image" />
      </SwiperSlide>
    );
  });
  return (
    <div>
      <h1>Day - 60 -Swiper Js with React</h1>
      <Swiper
        modules={[Thumbs]}
        spaceBetween={50}
        navigation={true}
        slidesPerView={1}
        onSlideChange={() => console.log("slider change")}
        // onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {slides}
      </Swiper>
      <Swiper
        modules={[Thumbs]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default SwiperUI;
