import Search from "./component/Search";
import filterIcon from "./assets/Filter.png";
import JobApplicationCard from "./JobApplicationCard";
import Footer from "../../components/Footer/Footer";

const JobApplication = () => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full py-4 px-5">
        <div className="flex gap-6 items-center justify-around">
          <Search />

          <img
            className="flex items-center p-2 justify-center gap-[10.5px] flex-shrink-0 rounded-full border-[0.875px] border-[#bcbcbc]"
            src={filterIcon}
            alt=""
          />
        </div>

        <JobApplicationCard />
      </div>

      <Footer />
    </>
  );
};

export default JobApplication;
