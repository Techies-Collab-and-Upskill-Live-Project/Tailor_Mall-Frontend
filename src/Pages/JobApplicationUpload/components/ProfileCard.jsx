import photo from "../assets/REGULAR CARD.png";
import location from "../assets/Location.png";
import photo2 from "../assets/img_desktop.png";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

const ProfileCard = ({ userData }) => {

  const photoNum = [1, 2, 3, 4];
  return (
    <>
    {/* {userData} */}
    <div className="inline-flex w-full flex-col items-center gap-[37px] rounded-xl border border-primary-100 pt-[6px] px-[7px] pb-10 md:rounded-2xl lg:w-[70%] lg:pt-0">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center">
          <div className="flex pr-0 w-full justify-center gap-[2.3px] rounded-[7.48px] md:pr-[0.001px] md:gap-[4.8px] md:rounded-[11px]">
            {photoNum.map((item, index) => (
              <div key={index} className="">
                <img
                  src={photo2}
                  className="flex items-center object-cover py-1 flex-col justify-center flex-shrink-0 bg-foundationGrey-100 w-[150px] md:w-[200px] rounded-lg"
                  key={index}
                  alt=""
                />
              </div>
            ))}
          </div>

          <img
            src=""
            className="mt-[-40px] rounded-[80px] border-[3.2px] border-[#fff] w-20 h-20 bg-[#d9d9d9] md:w-[131.64px] md:h-[131.64px] "
            alt=""
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex pb-3 flex-col gap-1 self-stretch">
            <h2 className="text-black text-2xl font-semibold leading-[28.8px]">
              Gift Sackey
            </h2>
            <p className="text-secondary text-center text-[14px] leading-[16.8px]">
              Fashion designer
            </p>
          </div>

          <div className="flex pt-3 items-center justify-center gap-[9px] border-t border-foundationGrey-50">
            <img src={location} className="w-4 h-4" alt="" />
            <p className="text-[14px] leading-[120%]">Accra, Ghana</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center">
          <h5 className="text-[28px] font-bold leading-[33.6px] tracking-[-1.12px]">
            200
          </h5>
          <p className="text-[12px] leading-[14.4px] text-center text-secondary ">
            Followers
          </p>
        </div>

        <div className="w-[1px] h-[51px] bg-foundationGrey-100"></div>

        <div className="flex flex-col items-center">
          <h5 className="text-[28px] font-bold leading-[33.6px] tracking-[-1.12px]">
            20
          </h5>
          <p className="text-[12px] leading-[14.4px] text-center text-secondary ">
            Projects
          </p>
        </div>

        <div className="w-[1px] h-[51px] bg-foundationGrey-100"></div>

        <div className="flex flex-col items-center">
          <h5 className="text-[28px] font-bold leading-[33.6px] tracking-[-1.12px]">
            200k
          </h5>
          <p className="text-[12px] leading-[14.4px] text-center text-secondary ">
            Project views
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfileCard;
