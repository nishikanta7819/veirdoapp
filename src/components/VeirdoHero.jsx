import "../styles/veirdohero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const VeirdoHero = () => {
  return (
    <>
      <div className="veirdo-hero">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
        >
          <SwiperSlide>
            <img
              src="https://veirdo.in/cdn/shop/files/Centre_stage_banner.jpg?v=1733827179&width=1066"
              alt=""
              className="hero-banner-img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://veirdo.in/cdn/shop/files/full_sleeve_1440x550_91280637-8a81-4111-84b2-d24f1430b990.jpg?v=1734933548"
              alt=""
              className="hero-banner-img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://veirdo.in/cdn/shop/files/offer_banner_new_model_1_7dd2defe-6398-430e-9e25-5d0f26f71776.jpg?v=1737783731"
              alt=""
              className="hero-banner-img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://veirdo.in/cdn/shop/files/Artboard_1_copy_a7277561-4d03-44e6-a20e-3e438ce678bf.png?v=1737783671"
              alt=""
              className="hero-banner-img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://veirdo.in/cdn/shop/files/1440_x_550_b2g1_banner_december.jpg?v=1735285291"
              alt=""
              className="hero-banner-img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.shopify.com/s/files/1/1982/7331/files/1440_550_copy_3.png?v=1742922059"
              alt=""
              className="hero-banner-img"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default VeirdoHero;
