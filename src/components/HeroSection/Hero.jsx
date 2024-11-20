import Slideshow from "../../Pages/Homepage/Carousel";

const Hero = () => {
  return (
    <div className="bg-[#003636] flex-shrink-0">
      <h4 className="font-medium text-center py-[20px] text-lg leading-[21.6px] text-[#E6F2F2]">
        WEEKLY SPOTLIGHTS
      </h4>

      <Slideshow />
    </div>
  );
};

export default Hero;
