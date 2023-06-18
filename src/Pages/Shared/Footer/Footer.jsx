import logo from '../../../assets/logo.png';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center md:py-8 lg:py-16'>
                    <div className='w-1/2 grid md:gap-3 lg:gap-6'>
                        <h2 className='md:text-2xl lg:text-4xl font-semibold'>Subscribe Our Newsletter</h2>
                        <p className='text-sm lg:text-lg lg:leading-7 text-gray'>Enter your details to get business inspiration, trending solutions, and consulting tips delivered to your inbox</p>
                    </div>
                    <div className="relative">
                        <input type="text" placeholder="Enter your email" className="input input-bordered w-full pr-16 rounded-none" />
                        <button className="btn bg-[#495AF0] capitalize text-white border-0 absolute top-0 right-0 rounded-l-none rounded-none">Subscribe</button>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='w-2/6 lg:w-3/6'>
                        <div className='flex items-center gap-3 mb-5'>
                            <img src={logo} alt="" />
                            <div>
                                <h2 className='font-semibold md:text-xl text-3xl'>Creative</h2>
                                <p className='text-sm lg:text-lg'>Perples Design</p>
                            </div>
                        </div>
                        <p className='text-gray'>Business consultants provide management consulting to help businesses and organizations improve performance.</p>
                        <div className='flex gap-2 mt-9'>
                            {/* icons */}
                            <AiOutlineTwitter className='border rounded-full p-2 text-4xl text-gray hover:text-white'></AiOutlineTwitter>
                            <FaLinkedinIn className='border rounded-full p-2 text-4xl text-gray hover:text-white'></FaLinkedinIn>
                            <FaPinterestP className='border rounded-full p-2 text-4xl text-gray hover:text-white'></FaPinterestP>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold md:text-lg lg:text-xl mb-2'>Company</h3>
                        <div className='text-gray flex flex-col'>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">FAQS</a>
                        <a href="">Services</a>
                        <a href="">Latest Posts</a>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold md:text-lg lg:text-xl mb-2'>Our Services</h3>
                        <div className='text-gray'>
                        <p>Business planning</p>
                        <p>Tax stategy</p>
                        <p>Financial advices</p>
                        <p>Insurance stategy</p>
                        <p>Manage investment</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold md:text-lg lg:text-xl mb-2'>Contact Info.</h3>
                        <div className='text-gray'>
                        <p>(303) 555-0105</p>
                        <p>(303) 555-0105</p>
                        <p>sara.cruz@example.com</p>
                        <div>
                            <address>3517W. Gray St.Utica,</address>
                            <address>Pennsylvania 57867</address>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='md:pb-8'>
                <div className='bg-[#181818] flex justify-between text-gray md:mt-7 lg:mt-14 lg:mb-8 md:p-4 lg:p-7'>
                    <p>2022 CreativePeoples. All Rights Reserved </p>
                    <div>
                        <a href="">Privacy Policy</a>
                        <a href="">Cookie policy</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;