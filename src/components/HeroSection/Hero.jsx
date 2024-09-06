import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import mainImg from "./assets/main.png"


const Hero = () => {
    return ( 
        <div className="bg-[#003636] flex-shrink-0">
            <h4 className="font-medium text-center py-[20px] text-lg leading-[21.6px] text-[#E6F2F2]">WEEKLY SPOTLIGHTS</h4>

            <div>
                <img src={mainImg} alt="" />
            </div>

            <div>
                <BiChevronLeft />
                <BiChevronRight />
            </div>
        </div>
     );
}
 
export default Hero;