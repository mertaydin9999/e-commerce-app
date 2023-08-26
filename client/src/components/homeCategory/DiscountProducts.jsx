import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./customSwiper.css";
import Photo from "../../assets/images/topuklu-1.jpeg";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const DiscountProducts = () => {
  return (
    <article>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={20}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="myDiscountSwiper"
      >
        <SwiperSlide>
          <img
            src={Photo}
            className="h-4/5 object-cover hover:brightness-75 cursor-pointer"
            alt=""
          />
          <div className="h-1/5">
            <p className="text-black">babet</p>
            <p className="text-black">babet</p>
            <p className="text-black">babet</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Photo}
            className="h-4/5 object-cover hover:brightness-75 cursor-pointer"
            alt=""
          />
          <div className="h-1/5">
            <p className="text-black">babet</p>
            <p className="text-black">babet</p>
            <p className="text-black">babet</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Photo}
            className="h-4/5 object-cover hover:brightness-75 cursor-pointer"
            alt=""
          />
          <div className="h-1/5">
            <p className="text-black">babet</p>
            <p className="text-black">babet</p>
            <p className="text-black">babet</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Photo}
            className="h-4/5 object-cover hover:brightness-75 cursor-pointer"
            alt=""
          />
          <div className="h-1/5">
            <p className="text-black">babet</p>
            <p className="text-black">babet</p>
            <p className="text-black">babet</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Photo}
            className="h-4/5 object-cover hover:brightness-75 cursor-pointer"
            alt=""
          />
          <div className="h-1/5">
            <p className="text-black">babet</p>
            <p className="text-black">babet</p>
            <p className="text-black">babet</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </article>
  );
};

export default DiscountProducts;
