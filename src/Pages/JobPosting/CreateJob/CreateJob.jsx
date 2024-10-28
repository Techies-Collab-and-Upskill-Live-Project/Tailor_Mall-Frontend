import { useContext, useState } from "react";
import JobTitle from "../JobDetails/JobTitle/JobTitle";
import { JobContext, JobProvider } from "../../../Context/JobContext";
import JobDescription from "../JobDetails/JobDescription/JobDescription";
import JobBudget from "../JobDetails/JobBudget/JobBudget";
import CreateNewJob from "./CreateNewJob";

const CreateJob = () => {
  // const { isDescription } = useContext(JobContext);
  

  return (
    <JobProvider>
      <CreateNewJob />
    </JobProvider>
  );
};

export default CreateJob;
