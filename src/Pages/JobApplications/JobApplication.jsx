import Search from "./component/Search";
import filterIcon from "./assets/Filter.png";
import JobApplicationCard from "./JobApplicationCard";
import Footer from "../../components/Footer/Footer";
import JobFilter from "./JobFilter";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router";

const JobApplication = () => {
  const { token, clientId } = useContext(UserContext);
  const [job, setJob] = useState();
  const baseUrl = import.meta.env.VITE_API_ENDPOINT_URL;
  const navigate = useNavigate();

  const getJob = async () => {
    try {
      const response = await axios.get(`${baseUrl}/job`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response?.data?.data;

      setJob(data);
    } catch (error) {
      const message = error?.response?.data?.message;
      if (message) {
        navigate("/")
      }
      console.log(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getJob();
  }, []);

  return (
    <>
      <Navbar text="Share work" />
      {!job && (
        <div className="flex items-center p-[100px] justify-center">
          <Oval
            height={200}
            width={200}
            color="black"
            secondaryColor="green"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
      {job && (
        <div className="flex md:px-8 gap-3 px-5 lg:p-[100px]">
          <div className="flex flex-col lg:w-fit">
            <div className="flex flex-col gap-4 w-full py-4 px-5 lg:px-0">
              <div className="flex gap-2 md:gap-6 items-center justify-center">
                <Search />

                <img
                  className="flex lg:hidden items-center p-2 justify-center gap-[10.5px] flex-shrink-0 rounded-full border-[0.875px] border-[#bcbcbc]"
                  src={filterIcon}
                  alt=""
                />
              </div>
            </div>

            <JobApplicationCard job={job} />
          </div>

          <JobFilter />
        </div>
      )}

      <Footer />
    </>
  );
};

export default JobApplication;
