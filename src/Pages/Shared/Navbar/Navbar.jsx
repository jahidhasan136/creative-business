import logo from '../../../assets/logo.png'
import { RiArrowRightUpLine } from 'react-icons/ri'

const Navbar = () => {
    return (
        <div className='p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <img src={logo} alt="" />
                <div className='flex gap-10'>
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Services</a>
                    <a href="">Pricing</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                </div>
                <div>
                    <button className='flex items-center border px-3 py-2 border-black font-semibold'>Free Consultation <RiArrowRightUpLine></RiArrowRightUpLine></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;