import { Link } from "react-router-dom";
import { JobApplicationsData } from "./JobApplicationData";
import dot from "./assets/dot.png";
import location from "./assets/Location.png";
import Bookmark from "./assets/Bookmark.png";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toast";
import { Toaster } from "sonner";
import { Oval } from "react-loader-spinner";

const JobApplicationCard = ({ job }) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl md:gap-6">
      {job &&
        Array.isArray(job) &&
        job.map((item, index) => (
          <Link
            to={`/jobs/${item._id}`}
            className="flex flex-col items-start gap-4 rounded-xl border-[1.2px] border-dashed border-[#008080] py-4 px-6"
            key={index}
          >
            <section className="flex flex-col dot gap-2 self-stretch">
              <section className="flex justify-between items-center self-stretch">
                <div>
                  <img src="" alt="" />
                  <h3 className="text-[12px] leading-[14.4px]">Mma Obiora</h3>
                </div>

                <img
                  src={Bookmark}
                  className="w-7 h-7 bg-[#E6F2F2] rounded-[18.7px]"
                  alt=""
                />
              </section>

              <section className="flex flex-col gap-2 self-stretch">
                <h2 className="overflow-hidden overflow-ellipsis text-xl font-semibold leading-[24px] text-[#008080]">
                  {item.title}
                </h2>

                <section className="flex items-center gap-1">
                  <div className="flex items-center gap-1">
                    <p className="text-[12px]">Category</p>
                    <img className="flex items-center " src={dot} alt="" />
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-[12px]">Payment type</p>
                    <img className="flex items-center " src={dot} alt="" />
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-[12px]">Price</p>
                  </div>
                </section>
              </section>

              <p className="overflow-hidden overflow-ellipsis text-base leading-[18.2px]">
                {item.description}
              </p>
            </section>

            <section className="flex content-center items-center gap-3 self-stretch flex-wrap">
              <div className="grid grid-cols-2 gap-3 md:flex flex-wrap">
                {item.requiredSkills.map((skill, index) => (
                  <h3
                    className="flex items-center justify-center py-1 px-[18px] text-[11px] text-[#008080] leading-[13px] rounded-[18.95px] bg-[#E6F2F2]"
                    key={index}
                  >
                    {skill}
                  </h3>
                ))}
              </div>
            </section>

            <section className="flex gap-4 self-stretch flex-wrap text-base">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex items-center gap-1">
                  <img
                    src={location}
                    className="w-[15px] h-[15px] self-center"
                    alt=""
                  />
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
