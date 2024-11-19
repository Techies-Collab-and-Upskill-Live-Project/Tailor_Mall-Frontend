const Message = ({ MessageData }) => {
  return (
    <div className="flex flex-col gap-1 md:items-start self-stretch mt-8">
      {MessageData.map((item, index) => (
        <div className="flex py-5 px-3 items-center gap-4 self-stretch bg-white rounded-2xl">
          <div>
            <img className="md:w-[60px] md:h-[60px]" src={item.img} alt="" />
          </div>

          <div className="flex flex-col items-center gap-3 dot">
            <div className="flex justify-between items-center self-stretch">
              <h1 className="text-[14px] md:text-base">{item.name}</h1>
              <p className="text-[12px] md:text-[14px]">{item.time}</p>
            </div>
            <div className="flex justify-between items-center self-stretch">
              <p className="text-[12px] md:text-[14px]">{item.detail}</p>

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
  );
};

export default Message;
