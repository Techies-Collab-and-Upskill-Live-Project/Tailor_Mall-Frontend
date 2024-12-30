import { CommunityData } from "../Messaging/CommunityData";
import { MessageData } from "./MessageData";

const CommunityMessage = () => {
  return (
    <div className="w-full flex-col items-center justify-center flex-start gap-6 flex-shrink-0 lg:px-5">
      <div className={`flex w-full flex-col gap-10 items-start`}>
        {CommunityData.map((item, index) => (
          <div
            className="flex items-center justify-between gap-3 w-full rounded-2xl bg-[#fff] hover:bg-gray-200 cursor-pointer"
            key={index}
          >
            <img src={item.img} className="w-[60px] h-[60px]" alt="" />

            <div className="flex dot flex-col gap-2 dot">
              <div className="flex justify-between items-center self-stretch">
                <p className="text-[14px] leading-[22.4px]">{item.name}</p>
                <p className="text-grey-50 opacity-[0.38] text-[12px] leading-[14.4px]">
                  {item.time}
                </p>
              </div>

              <div className="flex justify-between items-center self-stretch">
                <p className="text-[14px] text-grey-50 leading-[19.6px]">
                  {item.detail}
                </p>

                {item.unread && (
                  <p className="flex items-center bg-primary-50 rounded-full w-5 p-1 h-5 justify-center text-[12px]">
                    {item.unread}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityMessage;
