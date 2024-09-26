import DesignsCard from "../components/Designs/DesignCard";
import Footer from "../components/Footer/Footer";
import Hero from "../components/HeroSection/Hero";
import Navbar from "../components/Navbar/Navbar";

const LandingPage = () => {
    return ( 
        <>
        <Navbar />
        <Hero />
        <DesignsCard />
        <Footer />
        </>
     );
}
 
export default LandingPage;