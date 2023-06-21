import playIcon from '../../../assets/about/play_icon.png'
import cpImage from '../../../assets/about/aboutcp.png'
import { RiArrowRightUpLine } from 'react-icons/ri';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CountUp from 'react-countup';
import bgColor from '../../../assets/about/bgColor.png'

const AboutUs = () => {
    return (
        <div className='relative overflow-hidden' id='about'>
            <img className='absolute md:w-1/2 h-[370px] w-full md:h-full lg:w-1/2' src={bgColor} alt="" />
            <div className='flex flex-col md:flex-row justify-between md:items-center mt-6 container mx-auto gap-10 lg:gap-20 p-3 md:p-0'>
                <div className='md:w-1/2 z-10'>
                    <div className='flex items-center gap-3 mb-3 md:mb-7 lg:mb-10'>
                        <img src={playIcon} alt="" />
                        <div className='font-bold'>
                            <p>More</p>
                            <p>About CP</p>
                        </div>
                    </div>
                    <img src={cpImage} alt="" />
                </div>
                <div className='md:w-1/2 z-10'>
                    <p>
                        <SectionTitle
                            title="About Us"
                        >

                        </SectionTitle>
                    </p>
                    <h2 className='font-bold text-3xl lg:text-5xl mb-3 lg:mb-5'>We are aware for our quality to successful business</h2>
                    <p className=' lg:text-xl mb-6 lg:mb-10'>Learn how to start your own business consulting firm. Effective strategies for business consultants and things to consider before becoming a consultant. </p>
                    <div className='mb-8 lg:mb-12'>
                        <button className='btn-custom flex items-center'>More About Us <RiArrowRightUpLine></RiArrowRightUpLine></button>
                    </div>
                    <div className='divider'></div>
                    <div className='flex gap-5 lg:gap-11'>
                        <div>
                            <h3 className='text-3xl font-bold text-color'><CountUp duration={4} end={2760} />+</h3>
                            <p className='font-bold'>Total Customer</p>
                        </div>
                        <div>
                            <h3 className='text-3xl font-bold text-color'><CountUp duration={4} end={25} />+</h3>
                            <p className='font-bold'>Years Experience</p>
                        </div>
                        <div>
                            <h3 className='text-3xl font-bold text-color'><CountUp duration={4} end={328} />+</h3>
                            <p className='font-bold'>Team Members</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;