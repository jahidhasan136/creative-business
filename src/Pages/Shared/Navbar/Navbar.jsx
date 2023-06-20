import { FaBars } from 'react-icons/fa';
import logo from '../../../assets/logo.png'
import { RiArrowRightUpLine } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [navState, setNavState] = useState(false);
    const onNavScroll = () => {
        if (window.scrollY > 40) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", onNavScroll);
    }, []);
    return (
        <div className={`fixed w-full z-40 mt-10 p-3 transition-all duration-200 ease-in-out ${navState ? 'bg-[#00000070] text-white' : 'rounded-lg bg-base-200 z-10 w-full fixed'}`}>
            <div className='container mx-auto flex justify-between items-center'>
                <img src={logo} alt="" />
                <div className='md:flex hidden gap-10'>
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#services">Services</a>
                    <a href="">Pricing</a>
                    <a href="#blog">Blog</a>
                    <a href="">Contact</a>
                    <a href="">todos</a>
                </div>
                <div className='md:flex hidden'>
                    <button className='flex items-center border px-3 py-2 border-black font-semibold'>Free Consultation <RiArrowRightUpLine></RiArrowRightUpLine></button>
                </div>
                <div className='md:hidden text-2xl' onClick={() => setOpen(!open)}>
                    <span>
                        {
                            open === true
                                ?
                                <RxCross2></RxCross2>
                                :
                                <FaBars></FaBars>
                        }
                    </span>
                </div>
            </div>

            {/* MOBILE RESPONSIVE */}

            <div className={`flex-col gap-5 absolute  bg-[#000000a5] top-0 px-8 items-center pt-28 w-64 h-screen text-white flex md:hidden transition-all duration-300 ease-in-out ${open ? 'left-0' : '-left-64'}`}>
                <div className='md:hidden grid gap-4'>
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#services">Services</a>
                    <a href="">Pricing</a>
                    <a href="#blog">Blog</a>
                    <a href="">Contact</a>
                    <a href="">todos</a>
                </div>
                <div className='md:hidden grid'>
                    <button className='flex items-center px-3 py-2 bg-[#495AF0] font-semibold'>Free Consultation <RiArrowRightUpLine></RiArrowRightUpLine></button>
                </div>
            </div>


        </div>
    );
};

export default Navbar;