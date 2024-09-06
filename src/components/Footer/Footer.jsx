import { Data, End, Socials } from "./FooterData";

const Footer = () => {
  return (
    <div className="py-10 px-6 text-[#000]">
      <div className="pb-[16px] flex items-center flex-col px-5 self-stretch">
        <h3 className="font-extrabold text-center text-2xl leading-[28.8px] tracking-[-4%] text-[#111111]">
          LOGO
        </h3>

        {/* <div className="grid grid-cols-3 items-center md:grid-cols-4 justify-center text-[12px] leading-[14.4px] gap-6"> */}
        <div className="flex justify-center items-center content-center gap-y-5 gap-x-9 flex-wrap w-[339px] px-2  mt-7 md:w-full">
          {Data.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-7">
            {Socials.map((icon, id) => (
                <img key={id} src={icon} alt="" />
            ))}
        </div>

      </div>

      <div className="border-t border-[#bcbcbc] flex flex-col items-center justify-center gap-8 pt-4">
        <p className="text-center text-[#535353] text-sm leading-[16.8px] font-normal">©2024 Tailora</p>

        <div className="flex gap-8">
            {End.map((text) => (
                <p className="text-[#535353] text-[12px] leading-[16.8px]" key={text}>{text}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
