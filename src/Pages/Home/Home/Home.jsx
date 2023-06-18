import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import SocialSection from "../SocialSection/SocialSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>  
            <SocialSection></SocialSection>
            <AboutUs></AboutUs>
            <Features></Features>
        </div>
    );
};

export default Home;