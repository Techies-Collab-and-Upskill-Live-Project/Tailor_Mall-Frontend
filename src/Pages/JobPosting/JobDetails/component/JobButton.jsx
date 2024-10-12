import BigButton from "../../../../components/Button/BigButton";

const JobButton = () => {
  return (
    // <div className="flex flex-col border-t border-foundationGrey-100 my-5 px-0 pt-6 pb-10 gap-6 self-stretch md:flex-row-reverse w-full md:justify-center">
    <div className="flex flex-col border-t lg:border-none border-foundationGrey-100 my-5 px-0 pt-6 pb-10 gap-6 self-stretch md:flex-row-reverse w-full md:justify-center">
      <div className="px-5 py-2">
        <BigButton text="Next" className="w-full px-4 md:w-[440px] lg:w-full" />
      </div>

      <div className="py-3 px-4">
        <p className="text-primary-100 text-base leading-[22.4px] text-center">
          Previous
        </p>
      </div>
    </div>
  );
};

export default JobButton;
