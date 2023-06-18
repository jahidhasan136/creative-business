import { RiArrowRightUpLine } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuresPerson from '../../../assets/features/featuresPerson.png'
import success from '../../../assets/features/successChart.png'


const Features = () => {
    return (
        <div className="container mx-auto md:mt-24 lg:mt-32 flex justify-between md:gap-10 lg:gap-20">
            <div>
                <SectionTitle
                    title="Features"
                ></SectionTitle>
                <h2 className="md:text-3xl lg:text-5xl font-bold">Solve Your business problems with our experts</h2>
                <div className="grid md:gap-3 lg:gap-5 md:mt-5 lg:mt-10">
                    <div tabIndex={0} className="collapse collapse-open collapse-plus border border-base-300 bg-base-200 rounded-md">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium bg-black text-white">
                            Investing In Digital Company
                        </div>
                        <div className="collapse-content">
                            <p>Through Our Connected Contetn<sup>TM</sup> Approach, We Unite Communications, Digital EXperiences, And Performance Marketing tTo Help More Than 1600 Global Companies.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 rounded-md">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium [input:checked~&]:bg-black [input:checked~&]:text-white">
                            Building The Idea Of Future
                        </div>
                        <div className="collapse-content">
                            <p>Through Our Connected Contetn<sup>TM</sup> Approach, We Unite Communications, Digital EXperiences, And Performance Marketing tTo Help More Than 1600 Global Companies.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 rounded-md">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium [input:checked~&]:bg-black [input:checked~&]:text-white">
                            Accurate And Fiendly Support
                        </div>
                        <div className="collapse-content">
                            <p>Through Our Connected Contetn<sup>TM</sup> Approach, We Unite Communications, Digital EXperiences, And Performance Marketing tTo Help More Than 1600 Global Companies.</p>
                        </div>
                    </div>
                </div>
                <button className="flex items-center btn-custom md:mt-6 lg:mt-12">Discover More <RiArrowRightUpLine></RiArrowRightUpLine></button>
            </div>
            <div>
                <p className="md:mb-3 lg:mb-9 lg:text-xl">Business consultants provide management consulting to help businesses and organizations improve performance and efficienc</p>
                <div className="relative">
                    <img src={featuresPerson} alt="" />
                    <img className="absolute md:-bottom-14 lg:-bottom-28 md:w-1/2 md:-left-10 lg:-left-28" src={success} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Features;