import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./customSwiper.css";
import Photo from "../../assets/images/topuklu-1.jpeg";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MultipleSwiper = () => {
  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={false}
      spaceBetween={20}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={Photo} className="h-[300px] object-cover hover:brightness-75 cursor-pointer" alt="" />
        <span className="text-black font-semibold">babet</span>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Photo} className="h-[300px] object-cover" alt="" />
        <span className="text-black">babet</span>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Photo} className="h-[300px] object-cover" alt="" />
        <span className="text-black">babet</span>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Photo} className="h-[300px] object-cover" alt="" />
        <span className="text-black">babet</span>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Photo} className="h-[300px] object-cover" alt="" />
        <span className="text-black">babet</span>
      </SwiperSlide>
    </Swiper>
  );
};

export default MultipleSwiper;
