import sharebox from "./assets/Share-box.png";
import location from "./assets/Location.png";

const JobApplicationDetail = ({ job }) => {
  return (
    <div className="flex flex-col gap-[35px] w-full lg:w-2/3">
      <div className="flex flex-col gap-4 self-stretch w-full">
        <div className="flex items-center justify-between flex-shrink-0">
          <h2 className="overflow-hidden text-ellipsis text-lg font-bold leading-[21.6px] md:text-[22px] md:leading-[26.4px]">
            {job.JobName}
          </h2>

          <div className="w-8 h-8 flex items-center rounded-2xl p-2 justify-center bg-[#e6f2f2]">
            <img className="w-5 h-5 " src={sharebox} alt="" />
          </div>
        </div>

        <div className="flex items-start content-start gap-16 md:gap-[72px] flex-wrap">
          <div className="flex items-center gap-1">
            <img className="w-[14px] h-[14px]" src={location} alt="" />

            <h5 className="text-[12px] leading-[14.4px]">Location</h5>
          </div>

          <div className="flex items-center gap-2 ">
            <h5 className="text-[12px] leading-[14.4px] md:text-[14px]">Posted</h5>
            <h5 className="text-[12px] leading-[14.4px] md:text-[14px]">{job.postTime}</h5>
          </div>
        </div>
      </div>

      <div className="flex p-7 gap-3 rounded-xl bg-[#E6f2f2] md:self-stretch">
        <div className="flex  content-start dot flex-wrap gap-6 md:items-center md:justify-between dot">
          <div className="flex flex-col gap-1 items-start">
            <h5 className="capitalize flex text-[14px] leading-[16.8px] text-[#008080]">
              category
            </h5>
            <h5 className="capitalize flex text-[14px] l font-bold leading-[16.8px] text-[#008080]">
              category
            </h5>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <h5 className="capitalize flex text-[14px] leading-[16.8px] text-[#008080]">
              price fixed
            </h5>
            <h5 className="capitalize flex text-[14px] l font-bold leading-[16.8px] text-[#008080]">
              price fixed
            </h5>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <h5 className="capitalize flex text-[14px] leading-[16.8px] text-[#008080]">
              payment type
            </h5>
            <h5 className="capitalize flex text-[14px] l font-bold leading-[16.8px] text-[#008080]">
              payment type
            </h5>
          </div>

          <div className="flex flex-col gap-1 items-start">
            <h5 className="capitalize flex text-[14px] leading-[16.8px] text-[#008080]">
              experience level
            </h5>
            <h5 className="capitalize flex text-[14px] l font-bold leading-[16.8px] text-[#008080]">
              experience level
            </h5>
          </div>
        </div>
      </div>

      <p className="text-[14px] leading-[19.6px] md:self-stretch">{job.description}</p>

      <div className="flex items-center gap-3 content-center flex-wrap md:items-start md:gap-4">
        <div className="flex py-1 px-[18px] justify-center gap-[18.95px] rounded-[18.95] bg-[#E6F2F2]">
          <p className="text-[12px] leading-[14.4px]">Skill requirement</p>
        </div>
        <div className="flex py-1 px-[18px] justify-center gap-[18.95px] rounded-[18.95] bg-[#E6F2F2]">
          <p className="text-[12px] leading-[14.4px]">Skill requirement</p>
        </div>
        <div className="flex py-1 px-[18px] justify-center gap-[18.95px] rounded-[18.95] bg-[#E6F2F2]">
          <p className="text-[12px] leading-[14.4px]">Skill requirement</p>
        </div>
        <div className="flex py-1 px-[18px] justify-center gap-[18.95px] rounded-[18.95] bg-[#E6F2F2]">
          <p className="text-[12px] leading-[14.4px]">Skill requirement</p>
        </div>
        <div className="flex py-1 px-[18px] justify-center gap-[18.95px] rounded-[18.95] bg-[#E6F2F2]">
          <p className="text-[12px] leading-[14.4px]">Skill requirement</p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 self-stretch">
        <h5 className="text-[14px[ leading-[16.8px]">Posted by</h5>

        <div className="flex items-center gap-2 self-stretch">
          <img
            src=""
            className="border border-indigo-600 w-5 h-5 rounded-full"
            alt=""
          />
          <p className="text-[14px] leading-[16.8px]"> {job.name}</p>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationDetail;
