import hammenu from "./assets/hammenu.png";
import { NotificationData } from "./CommunityData";
import dot from "./assets/dot.png";

const Notifications = () => {
  return (
    <div className="flex p-6 flex-col gap-8 flex-shrink-0 rounded-3xl my-[20px] mx-[30px] md:items-center bg-primary-50">
      <div className="flex flex-col items-center gap-5 self-stretch">
        <div className="flex justify-between items-center self-stretch">
          <p className="flex text-[#111] text-xl font-bold leading-6">
            Notifications
          </p>

          <div className="flex p-1 justify-between items-center">
            <img src={hammenu} alt="" />
          </div>
        </div>

        {/* <div className="flex gap-3"></div> */}
        <section className="flex content-center items-center gap-3 self-stretch flex-wrap">
          <div className="flex gap-3 md:flex flex-wrap">
            <h3 className="flex items-center justify-center py-3 px-3 text-base text-[#008080] leading-[13px] rounded-[18.95px] bg-[#E6F2F2]">
              All
            </h3>
            <h3 className="flex items-center justify-center py-3 px-3 text-base text-[#008080] leading-[13px] rounded-[18.95px] bg-[#E6F2F2]">
              Read
            </h3>
            <h3 className="flex items-center justify-center py-3 px-3 text-base text-[#008080] leading-[13px] rounded-[18.95px] bg-[#E6F2F2]">
              Unread
            </h3>
          </div>
        </section>

        <section className="flex flex-col self-stretch items-start">
          {NotificationData.map((item, index) => (
            <div className="flex justify-between items-center pb-8 border-b border-foundationGrey-50 text-[12px] gap-3 self-stretch">
              <div className="flex items-center justify-between gap-4 dot">
                <div className="flex items-center gap-4 justify-center">
                  <img src={item.img} alt="User profile picture" />

                  <div className="flex flex-col gap-4 text-[12px]">
                    <h3 className="font-bold">
                      Sarah Gomez{" "}
                      <span className="font-light">followed you</span>
                    </h3>
                    <p>Aug 01 - 05:00 AM</p>
                  </div>
                </div>

                {item.unread && (
                  <img src={dot} className="w-4 h-4 rounded-full" alt="" />
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Notifications;
