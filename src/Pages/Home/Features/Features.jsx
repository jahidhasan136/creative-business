import { RiArrowRightUpLine } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuresPerson from '../../../assets/features/featuresPerson.png'
import success from '../../../assets/features/successChart.png'


const Features = () => {
    return (
        <div className="container mx-auto mt-10 md:mt-24 lg:mt-32 flex md:flex-row flex-col justify-between md:gap-10 lg:gap-20 p-3 md:p-0" id="blog">
            <div>
                <SectionTitle
                    title="Features"
                ></SectionTitle>
                <h2 className="text-xl w-1/2 md:w-full md:text-3xl lg:text-5xl font-bold">Solve Your business problems with our experts</h2>
                <div className="grid gap-3 lg:gap-5 mt-5 lg:mt-10">
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
                <button className="flex items-center btn-custom mt-6 lg:mt-12 mb-4 md:mb-0">Discover More <RiArrowRightUpLine></RiArrowRightUpLine></button>
            </div>
            <div>
                <p className="mb-3 lg:mb-9 lg:text-xl">Business consultants provide management consulting to help businesses and organizations improve performance and efficienc</p>
                <div className="relative float-right">
                    <img src={featuresPerson} alt="" />
                    <img className="absolute -bottom-14 lg:-bottom-28 w-1/2 -left-7 md:-left-10 lg:-left-28" src={success} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Features;