import Search from "./component/Search";
import filterIcon from "./assets/Filter.png";
import JobApplicationCard from "./JobApplicationCard";
import Footer from "../../components/Footer/Footer";
import JobFilter from "./JobFilter";

const JobApplication = () => {
  return (
    <>
      <div className="flex md:px-8 gap-3 px-5 lg:px-[100px]">
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

          <JobApplicationCard />
        </div>

        <JobFilter />
      </div>

      <Footer />
    </>
  );
};

export default JobApplication;
