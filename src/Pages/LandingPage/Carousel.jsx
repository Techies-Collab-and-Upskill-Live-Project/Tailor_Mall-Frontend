import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import img1 from "./Assets/Frame 84.png";
import img2 from "./Assets/Frame 85.png";
import img3 from "./Assets/Frame 86.png";
import img4 from "./Assets/Frame 87.png";
import img5 from "./Assets/unsplash_u3Cm8yJ0HjE.png";
import Left from "./Assets/fi_chevron-left.png";

const Slideshow = () => {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <div className="flex flex-shrink md:w-[500px] border ">
          <SwiperSlide>
            <img src={img5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="slide_image" />
          </SwiperSlide>
        </div>

        <div className="slider-controler">
          <div className="swiper-button-prev flex p-[12.87] justify-center items-center gap-[10.714px] rounded-[214.28px] border border-secondary slider-arrow">
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
            <img src={Left} className="text-white" alt="" />
          </div>
          <div className="swiper-button-next flex p-[12.87] justify-center items-center gap-[10.714px] rounded-[214.28px] border border-secondary slider-arrow">
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
            <img src={Left} className="text-white" alt="" />
          </div>
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </Swiper>
    </div>
  );
};

export default Slideshow;
