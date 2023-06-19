import { RiArrowRightUpLine } from "react-icons/ri";
import bannerPerson from '../../../assets/banner/person.png'
import businessDash from '../../../assets/banner/businessDashboard.png'
import sign from '../../../assets/banner/sign.png'
import ellipse1 from '../../../assets/banner/ellipse-1.png'
import ellipse2 from '../../../assets/banner/ellipse-2.png'
import ellipse3 from '../../../assets/banner/ellipse-3.png'
import ellipse4 from '../../../assets/banner/ellipse-4.png'
import bg from '../../../assets/banner/bg-shape.png'
import './Banner.css'
import CountUp from "react-countup";

const Banner = () => {
    return (
        <div className="bg-[#F4F9FF] relative">
            <img className="absolute w-1/3" src={bg} alt="" />
            <div className="p-10">
                <div className="container mx-auto flex justify-between items-center">
                    {/* left side */}
                    <div className="w-1/2">
                        <h1 className="font-bold md:text-5xl md:mb-5 lg:mb-5 lg:text-8xl"><span className="text-color">Hire Consultant</span> for boost your business</h1>
                        <p className="md:mb-7 lg:mb-10 lg:text-xl">Consultancy firm established by professionals with the intention to identify and unlock potential avenues for innovative ideas</p>
                        <div>
                            <button className="flex items-center btn-custom md:mb-10 lg:mb-12">Discover More <RiArrowRightUpLine></RiArrowRightUpLine></button>
                            <div className="flex items-center gap-3">
                                <div className="avatar-group -space-x-6">
                                    <div className="avatar border-2">
                                        <div className="w-12">
                                            <img src={ellipse1} />
                                        </div>
                                    </div>
                                    <div className="avatar border-2">
                                        <div className="w-12">
                                            <img src={ellipse2} />
                                        </div>
                                    </div>
                                    <div className="avatar border-2">
                                        <div className="w-12">
                                            <img src={ellipse3} />
                                        </div>
                                    </div>
                                    <div className="avatar border-2">
                                        <div className="w-12">
                                            <img src={ellipse4} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className="font-bold flex items-center text-color gap-1">
                                            4.9 | <div className="rating">
                                                <input type="radio" name="rating-1" className="mask mask-star bg-[#FD9C06] w-5" />
                                                <input type="radio" name="rating-1" className="mask mask-star bg-[#FD9C06] w-5" checked />
                                                <input type="radio" name="rating-1" className="mask mask-star bg-[#FD9C06] w-5" checked />
                                                <input type="radio" name="rating-1" className="mask mask-star bg-[#FD9C06] w-5" checked />
                                                <input type="radio" name="rating-1" className="mask mask-star bg-[#FD9C06] w-5" checked />
                                            </div>
                                        </h3>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#B1B3B7]"><CountUp duration={4} end={325} />K Total Review</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="relative">
                        <div className="md:w-96 bg-rectangle">
                        </div>
                        <img className="absolute -left-6 md:w-72 lg:w-auto md:-top-6 lg:top-3" src={bannerPerson} alt="" />
                        <img className="absolute md:w-56 md:top-56 md:-left-28 lg:w-auto lg:top-[410px] lg:-left-56" src={businessDash} alt="" />
                        <div className="bg-base-100 px-2 py-4 flex items-center gap-2 rounded-md w-40 lg:w-auto absolute top-0 -right-16">
                            <img className="md:w-10 lg:w-auto" src={sign} alt="" />
                            <div>
                                <h2 className="font-bold lg:text-xl">
                                    <CountUp duration={4} end={200} />K
                                </h2>
                                <p>Project Done</p>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;