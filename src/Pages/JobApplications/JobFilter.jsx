import BigButton from "../../components/Button/BigButton";

const skills = ["skill", "skill", "skill", "skill", "skill"];

const JobFilter = () => {
  return (
    <div className="hidden lg:flex flex-col h-fit p-6 gap-6 my-4 rounded-xl border border-[#B0D8D8]">
      <div className="flex gap-4 items-center">
        <input className="w-5 h-5" type="checkbox" />
        <p className="text-black font-[14px] leading-[16.6px]">Saved</p>
      </div>

      <div className="h-[1px] bg-[#d9d9d9]"></div>

      <div className="flex flex-col gap-4">
        <h4 className="text-[#000] text-base font-semibold leading-[22.72px]">
          Categories
        </h4>
        <div className="flex flex-col gap-4">
          {skills.map((skill, index) => (
            <div className="flex items-center gap-2" key={index}>
              <input type="checkbox" />
              <h4 className="text-[14px] leading-[16.8px]">{skill}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[1px] bg-[#d9d9d9]"></div>

      <div className="flex flex-col gap-4">
        <h4 className="text-[#000] text-base font-semibold leading-[22.72px]">
          Location
        </h4>

        <input type="text" className="border border-[#9c9c9c] h-9 rounded-xl" />

        <div className="flex gap-2">
          <input className="w-5 h-5" type="checkbox" />
          <h4 className="text-[14px] font-normal">Open to remote</h4>
          <h4></h4>
        </div>

        <input type="text" className="border border-[#9c9c9c] h-9 rounded-xl" />

        <div className="flex flex-col gap-4">
          <h4 className="text-black text-base font-semibold leading-[22.72px]">
            Job type
          </h4>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-start">
              <input type="checkbox" className="w-5 h-5" />
              <h4 className="text-black text-sm leading-[16.8px]">Full time</h4>
            </div>
            <div className="flex gap-2 items-start">
              <input type="checkbox" className="w-5 h-5" />
              <h4 className="text-black text-sm leading-[16.8px]">
                Contract/ Freelance
              </h4>
            </div>
          </div>
        </div>

        <BigButton text="Apply filter" />
      </div>
    </div>
  );
};

export default JobFilter;
