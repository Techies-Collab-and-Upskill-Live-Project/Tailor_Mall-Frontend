import BigButton from "../../../../components/Button/BigButton";

const JobDraft = ({handleSubmit}) => {
  return (
 <button onSubmit={handleSubmit} className="flex w-full px-3 h-8 justify-center items-center md:w-[400px] gap-2 py-4  flex-shrink-0 rounded-[100px] border border-primary-100 lg:w-[300px]
 ">
  <span className="text-[14px] text-primary-100">Save as Draft</span>
 </button>
  );
};

export default JobDraft;
