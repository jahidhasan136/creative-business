import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import team1 from '../../../assets/team/team1.png'
import team2 from '../../../assets/team/team2.png'
import team3 from '../../../assets/team/team3.png'
import team4 from '../../../assets/team/team4.png'
import team5 from '../../../assets/team/team5.png'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn, FaPinterestP } from 'react-icons/fa'

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
                    <div className="translate-y-1 bg-white">
                    <div className="flex items-center justify-between p-3 lg:p-5 -mt-28 lg:-mt-32 lg:w-[470px]">
                        <div>
                            <h3 className="font-bold lg:text-xl">Jenny Wilson</h3>
                            <p className="lg:text-lg">St. Celina, Delaware</p>
                        </div>
                        <div className="flex gap-3">
                            <AiOutlineTwitter className="border rounded-full text-4xl lg:text-5xl p-2 bg-[#50D0F9] text-white cursor-pointer"></AiOutlineTwitter>
                            <FaLinkedinIn className="border rounded-full text-4xl lg:text-5xl p-2 bg-[#3F51F6] text-white cursor-pointer"></FaLinkedinIn>
                            <FaPinterestP className="border rounded-full text-4xl lg:text-5xl p-2 bg-[#EF2121] text-white cursor-pointer"></FaPinterestP>
                        </div>
                    </div>
                    </div>
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
