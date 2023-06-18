import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import busineessAnalysis from '../../../assets/services/business_analysis.png'
import financialAnalysis from '../../../assets/services/financial_analysis.png'
import stategic from '../../../assets/services/strategic.png'
import riskManagement from '../../../assets/services/risk_management.png'
import { FaArrowRight } from "react-icons/fa";


const Services = () => {
    return (
        <div className="container mx-auto flex justify-between md:mt-20 lg:mt-28 md:gap-8 lg:gap-16">
            <div>
                <SectionTitle
                    title="Our Services"
                ></SectionTitle>
                <h1 className="md:text-3xl lg:text-5xl font-bold md:mb-2 lg:mb-5">Providing all Console Solution</h1>
                <p className="lg:text-xl md:mb-7 lg:mb-16">Business consultants provide management consulting to help busiessss organization improve performance and efficince</p>
                <div className="flex">
                    <div>
                        <h3 className="text-color font-bold md:text-3xl lg:text-5xl">96%</h3>
                        <p className="font-bold">Satisfaction rate</p>
                    </div>
                    <div className="divider-horizontal divider"></div>
                    <div>
                        <h3 className="text-color font-bold md:text-3xl lg:text-5xl">25M</h3>
                        <p className="font-bold">Registered users</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-7">
                <div className="bg-base-100 shadow-md md:p-3 p-5">
                    <img className="md:mb-2 lg:mb-3" src={busineessAnalysis} alt="" />
                    <h3 className="mb-2 font-bold lg:text-lg">Business Analysis</h3>
                    <p className="md:mb-4 lg:mb-6">Business analysis is a professional discipline of identifying business needs determining</p>
                    <p className="font-semibold flex items-center gap-2">Read More <FaArrowRight></FaArrowRight></p>
                </div>
                <div className="bg-base-100 shadow-md md:p-3 p-5">
                    <img src={financialAnalysis} alt="" />
                    <h3 className="mb-2 font-bold lg:text-lg">Financila Analysis</h3>
                    <p className="md:mb-4 lg:mb-6">Business analysis is a professional discipline of identifying business needs determining</p>
                    <p className="font-semibold flex items-center gap-2">Read More <FaArrowRight></FaArrowRight></p>
                </div>
                <div className="bg-base-100 shadow-md md:p-3 p-5">
                    <img src={riskManagement} alt="" />
                    <h3 className="mb-2 font-bold lg:text-lg">Risk Management</h3>
                    <p className="md:mb-4 lg:mb-6">Business analysis is a professional discipline of identifying business needs determining</p>
                    <p className="font-semibold flex items-center gap-2">Read More <FaArrowRight></FaArrowRight></p>
                </div>
                <div className="bg-base-100 shadow-md md:p-3 p-5">
                    <img src={stategic} alt="" />
                    <h3 className="mb-2 font-bold lg:text-lg">Stategic Consulting</h3>
                    <p className="md:mb-4 lg:mb-6">Business analysis is a professional discipline of identifying business needs determining</p>
                    <p className="font-semibold flex items-center gap-2">Read More <FaArrowRight></FaArrowRight></p>
                </div>
            </div>
        </div>
    );
};

export default Services;