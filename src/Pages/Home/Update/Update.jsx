import { FaArrowRight } from 'react-icons/fa';
import { BiMessage } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import image1 from '../../../assets/update/image1.png'
import image2 from '../../../assets/update/image2.png'
import image3 from '../../../assets/update/image3.png'

const Update = () => {
    return (
        <div className='container mx-auto'>
        <h1 className='text-5xl font-semibold text-center mb-8 lg:mb-14'>Regular Get Update</h1>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-7'>
                <div className='w-2/3 mx-auto md:w-auto lg:w-[420px]'>
                    <img src={image1} alt="" />
                    <div className='flex justify-between mt-3'>
                        <p className='text-gray font-bold'>Consultant</p>
                        <div className='flex gap-3'>
                            <p className='flex items-center gap-1 text-gray'><BiMessage></BiMessage> 25</p>
                            <p className='flex items-center gap-1 text-gray '><AiOutlineEye></AiOutlineEye> 32k</p>
                        </div>
                    </div>
                    <div className='divider my-1'></div>
                    <h2 className='font-bold lg:text-xl mb-2'>What is a business consultant?</h2>
                    <p className='mb-3'>A business consultant is a professional wigh a wide array of skills who assists business owners</p>
                    <p className='flex items-center gap-2 font-bold cursor-pointer hover:text-indigo-500'>Read More <FaArrowRight></FaArrowRight></p>
                </div>
                <div className='w-2/3 mx-auto md:w-auto lg:w-[420px]'>
                    <img src={image3} alt="" />
                    <div className='flex justify-between mt-3'>
                        <p className='text-gray font-bold'>Consultant</p>
                        <div className='flex gap-3'>
                            <p className='flex items-center gap-1 text-gray'><BiMessage></BiMessage> 25</p>
                            <p className='flex items-center gap-1 text-gray '><AiOutlineEye></AiOutlineEye> 32k</p>
                        </div>
                    </div>
                    <div className='divider my-1'></div>
                    <h2 className='font-bold lg:text-xl mb-2'>What is a business consultant?</h2>
                    <p className='mb-3'>A business consultant is a professional wigh a wide array of skills who assists business owners</p>
                    <p className='flex items-center gap-2 font-bold cursor-pointer hover:text-indigo-500'>Read More <FaArrowRight></FaArrowRight></p>
                </div>
                <div className='w-2/3 mx-auto md:w-auto lg:w-[420px]'>
                    <img src={image2} alt="" />
                    <div className='flex justify-between mt-3'>
                        <p className='text-gray font-bold'>Consultant</p>
                        <div className='flex gap-3'>
                            <p className='flex items-center gap-1 text-gray'><BiMessage></BiMessage> 25</p>
                            <p className='flex items-center gap-1 text-gray '><AiOutlineEye></AiOutlineEye> 32k</p>
                        </div>
                    </div>
                    <div className='divider my-1'></div>
                    <h2 className='font-bold lg:text-xl mb-2'>What is a business consultant?</h2>
                    <p className='mb-3'>A business consultant is a professional wigh a wide array of skills who assists business owners</p>
                    <p className='flex items-center gap-2 font-bold cursor-pointer hover:text-indigo-500'>Read More <FaArrowRight></FaArrowRight></p>
                </div>
            </div>
        </div>
    );
};

export default Update;