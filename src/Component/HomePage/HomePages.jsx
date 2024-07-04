import Banner from "./Banner/Banner";
import FeatureSection from "./Features/FeatureSection";
import Navbar from "./Navbar/Navbar";
import OurMembers from "./Ourmember/OurMembers";
import StateSection from "./Statssection/StateSection";

const HomePages = () => {
    return (
        <div className="">
            <Navbar/>
            <Banner/>
            <FeatureSection/>
            <StateSection/>
            <OurMembers/>
        </div>
    );
};

export default HomePages;