import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./Banner.css";
import "swiper/css";
import "swiper/css/navigation";
import banner1 from '../../assets/banner1.jpg'

const Banner = () => {
    return (
        <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="relative">
                    <img src={banner1} alt="" />
                    <h1 className="absolute top-20">hello</h1>
                </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
    );
};

export default Banner;