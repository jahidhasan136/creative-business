import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Services from "../Services/Services";
import SocialSection from "../SocialSection/SocialSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>  
            <SocialSection></SocialSection>
            <AboutUs></AboutUs>
            <Features></Features>
            <Services></Services>
        </div>
    );
};

export default Home;