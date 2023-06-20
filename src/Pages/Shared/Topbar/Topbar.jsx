import { AiOutlineTwitter, AiOutlineGoogle } from 'react-icons/ai';
import { FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import { FiPhoneCall } from 'react-icons/fi';


const Topbar = () => {
    return (
        <div className='bg-black fixed z-50 w-full'>
            <div className='flex justify-between items-center text-white/80 p-2 container mx-auto'>
            <div className='flex text-lg gap-3'>
                <FaLinkedinIn className='cursor-pointer hover:text-white'></FaLinkedinIn>
                <AiOutlineTwitter className='cursor-pointer hover:text-white'></AiOutlineTwitter>
                <AiOutlineGoogle className='cursor-pointer hover:text-white'></AiOutlineGoogle>
                <FaPinterestP className='cursor-pointer hover:text-white'></FaPinterestP>
            </div>
            <div className='flex gap-3'>
                <div className='flex gap-2 items-center cursor-pointer hover:text-white'>
                <LuMail></LuMail>
                info.pix@gmail.com
                </div>
                <div className='flex gap-2 items-center cursor-pointer hover:text-white'>
                <FiPhoneCall></FiPhoneCall>
                (209)555-0104
                </div>
            </div>
        </div>
        </div>
    );
};

export default Topbar;