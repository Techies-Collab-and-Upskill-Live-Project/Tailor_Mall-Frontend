import { useContext, useEffect, useState } from "react";
import { JobContext } from "../../../Context/JobContext";
import JobTitle from "../JobDetails/JobTitle/JobTitle";
import JobDescription from "../JobDetails/JobDescription/JobDescription";
import DescriptionTest from "../JobDetails/JobDescription/DescriptionTest";
import { UserContext } from "../../../Context/UserContext";
import JobReview from "../JobDetails/JobReview/JobReview";
import { Title } from "chart.js";
import JobBudget from "../JobDetails/JobBudget/JobBudget";
import JobTitleTest from "../JobDetails/JobTitle/JobTitleTest";
import { toast } from "sonner";
import CreateJobPost from "../CreateJobPost/CreateJobPost";
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import JobModal from "../JobModal";
import { useNavigate } from "react-router";

const CreateNewJob = () => {
  const navigate = useNavigate();
  const { clientId, token } = useContext(UserContext);
  const [postJob, setPostJob] = useState(true);
  const [title, setTitle] = useState(false);
  const [description, setDescription] = useState(false);
  const [budget, setBudget] = useState(false);
  const [review, setReview] = useState(false);
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasCreatedJob, setHasCreatedJobs] = useState(false);
  const baseUrl = import.meta.env.VITE_API_ENDPOINT_URL;
  const [client_id, setClient_id] = useState(clientId);
  const [range, setRange] = useState("0");

  const [requiredSkills, setRequiredSkills] = useState(() => {
    const savedSkills = localStorage.getItem("requiredSkills");
    return savedSkills ? JSON.parse(savedSkills) : [];
  });

  useEffect(() => {
    localStorage.setItem("requiredSkills", JSON.stringify(requiredSkills));
  }, [requiredSkills]);

  const [jobData, setJobData] = useState(() => {
    const savedJobData = localStorage.getItem("jobData");
    return savedJobData
      ? JSON.parse(savedJobData)
      : {
          title: "",
          clientId: client_id,
          category: "",
          jobType: "",
          description: "",
          qualification: "",
          files: [],
          budget: { min: "", max: "" },
          timeLine: "",
        };
  });

  useEffect(() => {
    localStorage.setItem("jobData", JSON.stringify(jobData));
  }, [jobData, clientId]);

  const handleJobDataChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevJobData) => ({
      ...prevJobData,
      [name]: value,
    }));
  };

  const toTitle = () => {
    setPostJob(false);
    setTitle(true);
    setDescription(false);
    setBudget(false);
    setReview(false);
  };

  const toDescription = () => {
    if (!jobData.title || !jobData.category || !jobData.jobType)
      return toast.error("PLease enter all fields!");
    setTitle(false);
    setDescription(true);
  };

  const addSkills = (skill, setSkill) => {
    if (skill.trim() !== "" && requiredSkills.length < 10) {
      setRequiredSkills([...requiredSkills, skill]);
      setSkill("");
    }
    if (requiredSkills.length >= 4) {
      setDisable(true);
    }
  };

  const toBudget = (e) => {
    if (!jobData.description || !jobData.qualification)
      return toast.error("Please enter all fields!");
    setTitle(false);
    setDescription(false);
    setBudget(true);
    setTitle(false);
  };

  const updateBudget = (e) => {
    const { name, value } = e.target;

    setJobData((prev) => ({
      ...prev,
      budget: {
        ...prev.budget,
        [name]: value,
      },
    }));
  };

  const toReview = () => {
    if (!jobData.budget || !jobData.timeLine)
      return toast.error("Please enter all fields");
    setTitle(false);
    setDescription(false);
    setBudget(false);
    setReview(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ ...jobData, clientId, requiredSkills });

    try {
      setLoading(true);
      const response = await axios.post(
        `${baseUrl}/job/`,
        {
          ...jobData,
          clientId,
          requiredSkills,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false)
      setHasCreatedJobs(true);
      toast.info("Job suucessfully created");

    } catch (error) {
      console.error("Error submitting the form:", error);
      setLoading(false);
    }
  };

  const postedJob = () => {
    setHasCreatedJobs(false);
    setReview(false);
    setPostJob(true);
  };

  return (
    <>
      <Navbar text="Post work" />
      <div className="font-light text-base lg:my-[80px] mt-[50px] mb-[120px]">
        {postJob && <CreateJobPost toTitle={toTitle} />}

        {title && (
          <JobTitleTest
            handleJobDataChange={handleJobDataChange}
            toDescription={toDescription}
            jobData={jobData}
          />
        )}

        {description && (
          <JobDescription
            handleJobDataChange={handleJobDataChange}
            addSkills={addSkills}
            disable={disable}
            jobData={jobData}
            requiredSkills={requiredSkills}
            toBudget={toBudget}
          />
        )}
        {budget && (
          <JobBudget
            handleJobDataChange={handleJobDataChange}
            toReview={toReview}
            jobData={jobData}
            updateBudget={updateBudget}
          />
        )}
        {review && (
          <JobReview
            handleJobDataChange={handleJobDataChange}
            jobData={jobData}
            requiredSkills={requiredSkills}
            handleSubmit={handleSubmit}
            loading={loading}
            hasCreatedJob={hasCreatedJob}
            postedJob={postedJob}
          />
        )}

        {hasCreatedJob && <JobModal postedJob={postedJob} />}
      </div>
    </>
  );
};

export default CreateNewJob;
