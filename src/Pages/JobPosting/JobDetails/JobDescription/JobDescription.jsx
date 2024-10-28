import { Link } from "react-router-dom";
import search from "../../assets/fi_search.png";
import JobContainer from "../JobContainer";
import Description from "./Description";
import BigButton from "../../../../components/Button/BigButton";
import JobButton from "../component/JobButton";
import { useContext } from "react";
import { JobContext } from "../../../../Context/JobContext";
import JobBudget from "../JobBudget/JobBudget";
import JobDraft from "../component/JobDraft";
import PreviousBtn from "../component/PreviousBtn";

const JobDescription = () => {
  const title = "Job Description & requirements";
  const detail =
    "Risus ut dolor mauris molestie est diam. Massa pellentesque tristique vestibulum vivamus scelerisque eu sagittis. Quam habitasse aenean fames mauris amet volutpat neque. ";

  // const renderFileList = () => {
  //   console.log(files);

  //   <ol>
  //    {[...files].map((f, i) => (
  //     <li key={i}>{f.name} - {f.type}</li>
  //    ))}
  //   </ol>
  // }

  // const handleRequiredSkills = (e) => {
  //   console.log(e.key);

  // }

  const { handleLastPage, isBudgetPage } = useContext(JobContext);
  return (
    <>
      {!isBudgetPage ? (
        <>
          <JobContainer title={title} detail={detail}>
            <Description />
          </JobContainer>

          <div className="px-5 py-5 lg:flex lg:border-t lg:bottom-0 lg:fixed lg:border-foundationGrey-100 lg:justify-between lg:w-full">
            <div className="flex py-4 w-full items-center justify-center lg:w-fit">
              <JobDraft />
            </div>

            <div className="flex py-6 px-3 flex-col md:flex-row-reverse items-center md:justify-around gap-6 border-t border-foundationGrey-100 lg:border-none">
              <JobButton handleClick={handleLastPage} />

              <PreviousBtn />
            </div>
          </div>
        </>
      ) : (
        <JobBudget />
      )}
    </>
  );
};

export default JobDescription;
