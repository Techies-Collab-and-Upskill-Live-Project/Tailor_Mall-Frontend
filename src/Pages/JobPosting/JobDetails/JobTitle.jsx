import JobContainer from "./JobContainer";

const JobTitle = () => {
  const title = "Basic Job Detail";
  const description =
    "Risus ut dolor mauris molestie est diam. Massa pellentesque tristique vestibulum vivamus scelerisque eu sagittis. Quam habitasse aenean fames mauris amet volutpat neque. ";
  return (
    <JobContainer title={title} detail={description}>
      <div className="flex py-10 px-4 flex-col gap-[10px] self-stretch rounded-xl border-2 border-primaryGreen-100 lg:w-[90%]">
        <div className="flex flex-col items-start gap-8 self-stretch">
          <div className="flex flex-col gap-2 self-stretch">
            <div className="flex flex-col gap-2 self-stretch">
              <label className="self-stretch text-xl leading-6" htmlFor="">
                Job title
              </label>
              <input
                type="text"
                className="flex flex-col justify-center gap-2 self-stretch rounded-xl px-3 border border-foundationGrey-50 h-10 outline-none"
              />
            </div>
            <p>eg. Freelance Fashion designer for Custom Evening Gown</p>
          </div>

          <div className="flex flex-col gap-2 self-stretch">
            <label className="self-stretch text-xl leading-6" htmlFor="">
              Job title
            </label>
            <input
              type="text"
              className="flex flex-col justify-center gap-2 self-stretch rounded-xl px-3 border border-foundationGrey-50 h-10 outline-none"
            />
          </div>

          <div className="flex flex-col gap-4 self-stretch">
            <p className="self-stretch text-xl leading-6">job type</p>

            <div className="flex gap-2 flex-col">
              <div className="flex items-center gap-2">
                <input type="radio" />
                <label
                  htmlFor=""
                  className="text-base leading-[22.4px] text-secondary"
                >
                  Full-time contract{" "}
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" />
                <label
                  htmlFor=""
                  className="text-base leading-[22.4px] text-secondary"
                >
                  One-off time
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </JobContainer>
  );
};

export default JobTitle;
