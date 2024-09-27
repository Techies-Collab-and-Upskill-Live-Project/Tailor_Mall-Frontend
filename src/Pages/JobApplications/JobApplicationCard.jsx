import { Link } from "react-router-dom";
import { JobApplicationsData } from "./JobApplicationData";
import dot from "./assets/dot.png";

const JobApplicationCard = () => {
  return (
    <div className="flex  flex-col gap-4 rounded-xl">
      {JobApplicationsData.map((item, index) => (
        <Link to={`/jobs/${item.id}`} className="flex flex-col items-start gap-4 rounded-xl border border-dashed border-[#008080] py-4 px-6" key={index}>
          <section className="flex flex-col dot gap-2 self-stretch">
            <section className="flex justify-between items-center self-stretch">
              <div>
                <img src="" alt="" />
                <h3>{item.name}</h3>
              </div>

              <img src="" alt="" />
            </section>

            <section className="flex flex-col gap-2 self-stretch">
              <h2 className="overflow-hidden overflow-ellipsis text-xl font-semibold leading-[24px] text-[#008080]">
                {item.JobName}
              </h2>

              <div className="flex gap-1 items-center capitalize text-[#282828]">
                {item.details.map((item, index) => (
                  <>
                    <p key={index} className="text-[12px]">{item}</p>
                    <img className="flex items-center" src={dot} alt="" />
                  </>
                ))}
              </div>
            </section>

            <p className="overflow-hidden overflow-ellipsis text-base leading-[18.2px]">
              {item.description}
            </p>
          </section>

          <section className="flex content-center items-center gap-3 self-stretch flex-wrap">
            <div className="grid grid-cols-2 items-center justify-center gap-3">
              {item.skills.map((skill, index) => (
                // <div className="">
                <h3
                  className="flex items-center justify-center py-1 px-[18px] text-[11px] text-[#008080] leading-[13px] rounded-[18.95px] bg-[#E6F2F2]"
                  key={index}
                >
                  {skill}
                </h3>
                //  </div>
              ))}
            </div>
          </section>

          <section className="flex gap-4 self-stretch flex-wrap">
            <div className="flex flex-col gap-5">
              <div className="flex items-center-gap-1">
                <img src="" className="" alt="" />
                <p>Location</p>
              </div>

              <div>Posted 12:67:00</div>
            </div>
            <p>Experience</p>
          </section>
        </Link>
      ))}
    </div>
  );
};

export default JobApplicationCard;
