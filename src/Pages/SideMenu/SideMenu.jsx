import exit from "../Community/assets/fi_exit.png";
import person from "../Community/assets/Ellipse 11 (3).png";
import photo1 from "../Community/assets/suit.png";
import photo2 from "../Community/assets/img.png";

const SideMenu = ({ showSideMenu }) => {
  return (
    <div className={`px-10 pt-5 ${showSideMenu ? "px-10 border-r border-foundationGrey-50" : ""}`}>
      <div className="mt-[50px] flex py-8 flex-col gap-7 flex-shrink-0 md:pb-0">
        <div className="md:hidden rounded-[100px] flex w-8 h-8 justify-center items-center gap-[10px] bg-grey-100">
          {/* <img className="w-3 h-3 -rotate-45 flex-shrink-0" src={exit} alt="" /> */}
          <h1 className="">x</h1>
        </div>

        <div className="flex flex-col gap-3 self-stretch items-center">
          <img
            className="rounded-[100px] w-[100px] h-[100px] bg-cover bg-no-repeat"
            src={person}
            alt=""
          />

          <div className="flex flex-col items-center">
            <h1 className="text-xl text-center leading-6 dot">
              Chukwu Blessed{" "}
            </h1>
            <p className="text-[12px] text-grey-50 text-center leading-4 dot">
              {" "}
              online
            </p>
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-9 self-stretch">
        <div className="flex flex-col gap-3 self-stretch">
          <div className="flex justify-between">
            <h1 className="text-base leading-[22px]">Photos and Videos</h1>
            <p className="text-[14px] text-grey-50 leading-[19px]">view all</p>
          </div>

          <div className="flex gap-2">
            <img
              src={photo1}
              className="rounded-[12px] border-[3px] bg-[#fff] sidemenu"
              alt=""
            />
            <img
              src={photo1}
              className="rounded-[12px] border-[3px] bg-[#fff] sidemenu"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 self-stretch">
          <div className="flex justify-between items-center w-full gap-3">
            <p className="text-black text-base leading-[22.4px] dot">Files</p>
            <p className="text-grey-50 text-center text-[14px] leading-[19.6px]">
              view all
            </p>
          </div>

          <p className="text-grey-50 text-[14px] leading-[19.6px] items-start">
            No files
          </p>
        </div>

        <div className="flex flex-col items-start gap-[10px] self-stretch">
          <div className="flex justify-between items-center w-full gap-3">
            <p className="text-black text-base leading-[22.4px] dot">
              Communities in common
            </p>
            <p className="text-grey-50 text-center text-[14px] leading-[19.6px]">
              view all
            </p>
          </div>

          <p className="text-grey-50 text-[14px] leading-[19.6px] items-start">
            No communities in common
          </p>
        </div>
      </section>
    </div>
  );
};

export default SideMenu;
