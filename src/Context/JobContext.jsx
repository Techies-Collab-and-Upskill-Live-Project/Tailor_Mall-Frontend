import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { UserContext } from "./UserContext";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobsData] = useState(
    localStorage.getItem("jobData")
      ? JSON.parse(localStorage.getItem("jobData"))
      : null
  );

  const [requiredSkills, setRequiredSkills] = useState(() => {
    const savedSkills = localStorage.getItem("requiredSkills");
    return savedSkills ? JSON.parse(savedSkills) : [];
  });

  useEffect(() => {
    localStorage.setItem("requiredSkills", JSON.stringify(requiredSkills));
  }, [requiredSkills]);

  const baseUrl = import.meta.env.VITE_API_ENDPOINT_URL;
  const [isDescription, setIsDescription] = useState(false);
  const [isBudgetPage, setIsBudgetPage] = useState(false);
  const { clientId, token } = useContext(UserContext);

  const [jobData, setJobData] = useState(() => {
    const savedJobData = localStorage.getItem("jobData");
    return savedJobData
      ? JSON.parse(savedJobData)
      : {
          title: "",
          clientId: clientId,
          category: "",
          jobType: "",
          description: "",
          qualification: "",
          files: [],
          budget: {},
          // budget: { priceRange: { min: "", max: "" } },
          timeLine: "",
        };
  });

  // Save jobData to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("jobData", JSON.stringify(jobData));
  }, [jobData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevJobData) => ({
      ...prevJobData,
      [name]: value,
    }));

    console.log(jobData);
  };

  const validateTitleForm = (e) => {
    let errors = {};
    if (!jobData.title) {
      errors.title = "Title field cannot be empty";
    }
    if (!jobData.category) {
      errors.category = "Please input the job category";
    }
    if (!jobData.jobType) {
      errors.jobType = "Please input the Job type";
    }
    return errors;
  };

  const handleNextPage = (e) => {
    e.preventDefault();

    const validatedForm = validateTitleForm();

    console.log(jobData);

    if (Object.keys(validatedForm).length === 0) {
      setIsDescription(true);
    } else {
      toast.warning("Please input all your field!");
    }
  };

  const validateDescriptionForm = (e) => {
    let errors = {};
    if (!jobData.description) {
      errors.description = "description field cannot be empty";
    }
    if (!jobData.qualification) {
      errors.qualification = "Please input the job category";
    }
    return errors;
  };

  const handleLastPage = (e) => {
    e.preventDefault();

    const validatedDescription = validateDescriptionForm();

    if (Object.keys(validatedDescription).length === 0) {
      setIsBudgetPage(true);
    } else {
      toast.warning("Please input all your field!");
    }
  };

  // const [requiredSkills, setRequiredSkills] = useState([]);
  const [disable, setDisable] = useState(false);
  const [files, setFiles] = useState([]);

  const addSkills = (skill, setSkill) => {
    if (skill.trim() !== "" && requiredSkills.length < 10) {
      setRequiredSkills([...requiredSkills, skill]);
      setSkill("");
    }
    if (requiredSkills.length >= 4) {
      setDisable(true);
    }
    console.log(requiredSkills);
  };

  const addFile = (file) => {
    setFiles(file);
    setJobData((prevData) => ({
      ...prevData,
      files: file,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
    console.log(jobData);
  };

  const validateForm = (e) => {
    let errors = {};
    if (!jobData.timeLine) {
      errors.timeLine = "Please input the Job type";
    }
    if (!jobData.budget) {
      errors.budget = "Please input your budget";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (Object.keys(validatedForm).length === 0) {
    try {
      const response = await axios.post(
        `${baseUrl}/job/`,
        {
          ...jobData,
          requiredSkills,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <JobContext.Provider
      value={{
        handleInputChange,
        handleChange,
        jobData,
        setJobData,
        requiredSkills,
        addSkills,
        disable,
        addFile,
        files,
        handleNextPage,
        isDescription,
        handleLastPage,
        isBudgetPage,
        handleSubmit,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
