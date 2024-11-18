import { useParams } from "react-router";
import { JobApplicationsData } from "./JobApplicationData";
import { useEffect, useState } from "react";
import JobApplicationDetail from "./JobApplicationDetail";
import BigButton from "../../components/Button/BigButton";
import bookmark from "./assets/Bookmark.png";
import useGetProducts from "../../Hooks/useGetSingleJob";

const JobApplicationDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  const { url, getSingleJob } = useGetProducts();

  const clickedItem = JobApplicationsData.find((item) => {
    return item.id === Number(id);
  });

  useEffect(() => {
    getSingleJob(id)
  }, [id])

  // useEffect(() => {
  //   if (clickedItem) {
  //     setJob(clickedItem);
  //   }

  //   console.log(job);
  // }, [clickedItem]);

  return (
    <h1>Hello!!!!!!</h1>
    // <div className="py-5 px-4 lg:px-[100px] lg:flex lg:gap-12">
    //   {job && <JobApplicationDetail job={job} />}

    //   <div className="flex pt-6 pb-8 px-6 gap-6 md:fixed md:w-full md:bottom-0 lg:hidden">
    //     <BigButton text="Continue" className="w-full" />

    //     <button className="flex w-12 h-12 py-3 px-4 justify-center items-center gap-3 flex-shrink-0 rounded-[100px] border border-[#008080]">
    //       <img src={bookmark} className="w-7 h-7 flex-shrink-0" alt="" />
    //     </button>
    //   </div>

    //   <div className="hidden lg:flex h-fit w-1/3 p-10 flex-col items-start gap-[29px] rounded-xl border border-[#008080]">
    //     <BigButton text="Apply" className="w-full" />
    //     <BigButton text="Save for later" className="w-full text-[1px] bg-[#fff] border border-[#008080]" />
    //   </div>
    // </div>
  );
};

export default JobApplicationDetails;
