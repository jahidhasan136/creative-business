import playIcon from '../../../assets/about/play_icon.png'
import cpImage from '../../../assets/about/aboutcp.png'
import { RiArrowRightUpLine } from 'react-icons/ri';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CountUp from 'react-countup';

const AboutUs = () => {
    return (
        <div className='flex justify-between items-center my-6 container mx-auto md:gap-10 lg:gap-20'>
            <div className='w-1/2'>
                <div className='flex items-center gap-3 md:mb-7 lg:mb-10'>
                    <img src={playIcon} alt="" />
                    <div className='font-bold'>
                        <p>More</p>
                        <p>About CP</p>
                    </div>
                </div>
                <img src={cpImage} alt="" />
            </div>
            <div className='w-1/2'>
                <p>
                    <SectionTitle
                        title="About Us"
                    >
                        
                    </SectionTitle>
                </p>
                <h2 className='font-bold md:text-3xl lg:text-5xl md:mb-3 lg:mb-5'>We are aware for our quality to successful business</h2>
                <p className=' lg:text-xl md:mb-6 lg:mb-12'>Learn how to start your own business consulting firm. Effective strategies for business consultants and things to consider before becoming a consultant. </p>
                <div className='md:mb-8 lg:mb-16'>
                    <button className='btn-custom flex items-center'>More About Us <RiArrowRightUpLine></RiArrowRightUpLine></button>
                </div>
                <div className='divider'></div>
                <div className='flex md:gap-5 lg:gap-11'>
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
    );
};

export default AboutUs;