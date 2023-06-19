import dribbble from '../../../assets/social/dribbble.png'
import behance from '../../../assets/social/behance.png'
import github from '../../../assets/social/github.png'
import instagram from '../../../assets/social/instagram.png'
import stackoverflow from '../../../assets/social/stackoverflow.png'
import bg from '../../../assets/banner/bg-shape.png'
import Marquee from "react-fast-marquee";

const SocialSection = () => {
    return (
        <div className='relative'>
            <img className='absolute -right-40 top-4 w-1/3' src={bg} alt="" />
            <div className='container mx-auto'>
            <Marquee gradient>
            <div className='md:p-10 lg:p-24 flex items-center gap-10 lg:gap-20'>
                <img src={dribbble} alt="" />
                <img src={behance} alt="" />
                <img src={github} alt="" />
                <img src={instagram} alt="" />
                <img src={stackoverflow} alt="" />
            </div>
            </Marquee>
        </div >
        </div>
    );
};

export default SocialSection;