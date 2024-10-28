import { useContext } from "react";
import { JobContext } from "../../../Context/JobContext";
import JobTitle from "../JobDetails/JobTitle/JobTitle";
import JobDescription from "../JobDetails/JobDescription/JobDescription";

const CreateNewJob = () => {
  const { isDescription, jobData } = useContext(JobContext);

  return <>{isDescription ? <JobDescription /> : <JobTitle />}</>;
};

export default CreateNewJob;
