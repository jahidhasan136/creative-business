import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import team1 from '../../../assets/team/team1.png'
import team2 from '../../../assets/team/team2.png'
import team3 from '../../../assets/team/team3.png'
import team4 from '../../../assets/team/team4.png'
import team5 from '../../../assets/team/team5.png'

SwiperCore.use([Autoplay, Pagination]);

const Team = () => {
    return (
        <div className="md:mt-20 lg:mt-28">
            <h3 className="text-red-500 uppercase text-center">Our Team</h3>
            <h1 className="font-bold md:text-3xl lg:text-5xl text-center md:mb-7 lg:mb-14">Meet with Expert</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={team1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={team2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={team3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={team4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={team5} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Team;
