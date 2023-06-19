import { Helmet } from "react-helmet-async";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ClientSays from "../ClientSays/ClientSays";
import Features from "../Features/Features";
import Services from "../Services/Services";
import SocialSection from "../SocialSection/SocialSection";
import Update from "../Update/Update";
import Team from "../Team/Team";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Creative Business</title>
            </Helmet>
            <Banner></Banner>  
            <SocialSection></SocialSection>
            <AboutUs></AboutUs>
            <Features></Features>
            <Services></Services>
            <Team></Team>
            <ClientSays></ClientSays>
            <Update></Update>
        </div>
    );
};

export default Home;