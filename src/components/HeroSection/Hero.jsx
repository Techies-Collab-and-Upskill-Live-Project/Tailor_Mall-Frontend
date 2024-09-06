import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import mainImg from "./assets/main.png"
import chevronleft from "./assets/fi_chevron-left (1).png"


const Hero = () => {
    return ( 
        <div className="bg-[#003636] flex-shrink-0">
            <h4 className="font-medium text-center py-[20px] text-lg leading-[21.6px] text-[#E6F2F2]">WEEKLY SPOTLIGHTS</h4>

            <div>
                <img src={mainImg} alt="" />
            </div>

            <div>
               <img src={chevronleft} className="w-[19.1px] h-[19.1px]" alt="" />
               <img src={chevronleft} className="w-[19.1px] h-[19.1px] rotate-[180deg]" alt="" />
            </div>
        </div>
     );
}
 
export default Hero;