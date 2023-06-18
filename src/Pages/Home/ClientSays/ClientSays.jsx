import { RiArrowRightUpLine } from "react-icons/ri";
import clientImg from '../../../assets/client/clientImg.png'
import client from '../../../assets/client/client.png'

const ClientSays = () => {
    return (
        <div className="lg:mt-28 md:mt-20">
            <div className="">
                <div className="md:mb-10 lg:mb-14  bg-[#FFF5DA] pb-56">
                    <div className="flex justify-between container mx-auto pt-10">
                    <h2 className="md:text-3xl lg:text-5xl font-semibold w-1/2">Our Client Says Their Statisfaction</h2>
                    <button className="btn-custom flex items-center">Discover More <RiArrowRightUpLine></RiArrowRightUpLine></button>
                    </div>
                </div>
                <div className="flex justify-between bg-base-100 shadow-md md:gap-7 lg:gap-20 items-center container mx-auto -mt-56 mb-52">
                    <img className="md:w-1/2 lg:w-full" src={clientImg} alt="" />
                    <div className="grid gap-7 lg:gap-14 p-5">
                        <p className="font-semibold italic text-gray-500 lg:text-lg text-justify">Will is one of the most knowledgeable and competent people I have ever met in th IT field. The more difficult the IT challenge, the more Will enjoys the wokrd. He always delivers the highest quality results and client satisfaction is his major goal.</p>
                        <div className="flex items-center">
                            <img className="w-1/6 lg:w-full" src={client} alt="" />
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