import { useParams } from "react-router";
import { JobApplicationsData } from "./JobApplicationData";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

const JobApplicationDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);

  const filterThrough = () => {
    // console.log(JobApplicationsData);

    const clickedItem = JobApplicationsData.filter((item) => {
      return item.id === 1;
    });

    setJob(clickedItem);
  };

  useEffect(() => {
    filterThrough();
  }, []);

  return (
    <div className="py-5 px-4">
      <h1>Hello</h1>
      {job &&
        job.map((item, id) => (
          <div key={id} className="flex">
            <div className="flex flex-col gap-4 self-stretch">
              <h2 className="overflow-hidden text-ellipsis text-lg font-bold leading-[21.6px]">
                {item.JobName}
              </h2>
            </div>
          </div>
        ))}
    </div>
  );
};

export default JobApplicationDetail;
