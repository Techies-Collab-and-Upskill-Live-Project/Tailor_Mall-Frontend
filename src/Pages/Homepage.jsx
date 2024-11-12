import { useNavigate } from "react-router";
import DesignsCard from "../components/Designs/DesignCard";
import Footer from "../components/Footer/Footer";
import Hero from "../components/HeroSection/Hero";
import Navbar from "../components/Navbar/Navbar";

const HomePage = () => {
  

  return (
    <>
      <Navbar text="create job" />
      <Hero />
      <DesignsCard />
      <Footer />
    </>
  );
};

export default HomePage;
