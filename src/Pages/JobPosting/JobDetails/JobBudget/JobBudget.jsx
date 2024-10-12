import BudgetTimeline from "./BudgetTimeline";
import JobContainer from "../JobContainer";

const JobBudget = () => {
  const title = "Budget and Timeline";
  const description =
    "Risus ut dolor mauris molestie est diam. Massa pellentesque tristique vestibulum vivamus scelerisque eu sagittis. Quam habitasse aenean fames mauris amet volutpat neque. ";
  return (
    <JobContainer title={title} detail={description}>
      <div className="flex py-10 px-4 flex-col gap-[10px] self-stretch rounded-xl border-2 border-primaryGreen-100 lg:w-[90%]">
        <BudgetTimeline />
      </div>
    </JobContainer>
  );
};

export default JobBudget;
