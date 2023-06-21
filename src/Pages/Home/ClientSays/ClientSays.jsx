import { RiArrowRightUpLine } from "react-icons/ri";
import clientImg from '../../../assets/client/clientImg.png'
import client from '../../../assets/client/client.png'
// import bg from '../../../assets/banner/bg-shape.png'
import playIcon from '../../../assets/client/playIcon.png'
import Modal from "../Modal/Modal";
import { useState } from "react";

//-right-28
const ClientSays = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="lg:mt-28 mt-10 md:mt-20">
            <div className="">
                <div className="mb-5 md:mb-10 lg:mb-14  bg-[#FFF5DA] pb-56">
                    <div className="flex justify-between container mx-auto pt-10 px-5 md:px-0 items-center">
                        <h2 className="md:text-3xl lg:text-5xl font-semibold w-1/2">Our Client Says Their Statisfaction</h2>
                        <button className="btn-custom flex items-center">Discover More <RiArrowRightUpLine></RiArrowRightUpLine></button>
                    </div>
                </div>
                <div className="flex justify-between bg-base-100 shadow-md md:gap-7 lg:gap-20 items-center container mx-auto -mt-56 mb-20 lg:mb-28 px-5 md:px-0">
                    <img className="w-1/2 lg:w-full relative" src={clientImg} alt="" />
                    <img onClick={openModal} className="absolute pl-28 md:pl-44 lg:pl-64 cursor-pointer" src={playIcon} alt="" />
                    <Modal isOpen={isModalOpen} onClose={closeModal} />
                    <div className="grid gap-7 lg:gap-14 p-5">
                        <p className="font-semibold italic text-gray-500 lg:text-xl text-justify">Will is one of the most knowledgeable and competent people I have ever met in th IT field. The more difficult the IT challenge, the more Will enjoys the wokrd. He always delivers the highest quality results and client satisfaction is his major goal.</p>
                        <div className="flex items-center gap-4">
                            <img className="w-1/6 lg:w-1/12" src={client} alt="" />
                            <div>
                                <h3 className="font-bold">Justin L. Garcia</h3>
                                <p>Co-founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientSays;