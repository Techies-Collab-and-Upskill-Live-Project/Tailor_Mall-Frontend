import exit from "../Community/assets/fi_exit.png";
import person from "./assets/Ellipse 11 (4).png";
import share from "./assets/fi_share-2.png";

const CommunitySideMenu = ({}) => {
  return (
    <div className="px-3 pt-1 pb-[150px]">
      <div className="mt-[50px] flex py-8 px-2 flex-col gap-7 flex-shrink-0 md:pb-0">
        <div className="rounded-[100px] flex w-8 h-8 justify-center items-center gap-[10px] bg-grey-100">
          <h1 className="">x</h1>
        </div>

        <div className="flex flex-col gap-3 self-stretch items-center">
          <img
            className="rounded-[100px] w-[80px] h-[80px] bg-cover bg-no-repeat"
            src={person}
            alt=""
          />

          <div className="flex flex-col items-center">
            <h1 className="text-xl text-center leading-6 dot">Tailor's Talk</h1>
            <p className="text-[12px] text-grey-50 text-center leading-4 dot">
              {" "}
              200 members, 12 online
            </p>
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-9 self-stretch">
        <section
          className="flex items-center gap-2 self-stretch
        "
        >
          <div>
            <img src={share} alt="" />
          </div>
          <p className="text-black text-[12px] leading-[14.4px]">
            Invite via link
          </p>
        </section>
        
        <section className="flex flex-col gap-3 self-stretch">
          <div className="flex justify-between items-center dot">
            <h1 className="text-black text-base leading-[22.4px]">Members</h1>

            <p className="text-secondary ">view all</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default CommunitySideMenu;
