const BudgetTimeline = () => {
  return (
    <div className="flex flex-col gap-4 self-stretch">
      <div className="flex flex-col gap-4 self-stretch">
        <h3 className="text-xl leading-6 font-medium">Budget</h3>

        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-4">
            <input type="radio" />

            <div>
              <h5 className="dot text-base leeading-[22.4px] font-semibold">
                Fixed Price
              </h5>

              <p className="text-base leading-[22.4px] opacity-70">
                Set a specific amount for your project. This option is ideal for
                well-defined tasks where the scope and deliverables are clear
                from the start.
              </p>

              <div className="flex items-center gap-1">
                <p className="w-5 h-5">$</p>
                <div>
                  <input
                    type="text"
                    className="dot outline-none border h-12 pl-2 "
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <input type="radio" />

            <div>
              <h5 className="dot text-base leeading-[22.4px] font-semibold">
                Price Range
              </h5>

              <p className="text-base leading-[22.4px] opacity-70">
                Provide a budget range to attract a variety of proposals. This
                flexible option allows designers to bid based on their expertise
                and the complexity of the job.
              </p>

              <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
                <div>
                  <p className="lg:hidden">From</p>
                  <div className="flex items-center">
                    <p className="w-5 h-5">$</p>
                    <input
                      type="text"
                      className="dot outline-none border h-12 pl-2 "
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className="hidden lg:flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="4"
                    viewBox="0 0 23 4"
                    fill="none"
                  >
                    <path
                      d="M1.5 2H21.5"
                      stroke="#535353"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="lg:hidden">To</p>
                  <div className="flex items-center">
                    <p className="w-5 h-5">$</p>
                    <input
                      type="text"
                      className="dot outline-none border h-12 pl-2 "
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 self-stretch flex-col">
          <p className="text-xl leading-6 font-medium">Timeline</p>

          <div className="flex flex-col gap-4 rounded-lg self-stretch">
            <div>
              <div className="bg-white flex border justify-center">
                <input type="text" className="w-full outline-none" />
                <p className="bg-foundationGrey-50 self-end items-end flex p-4">
                  weeks
                </p>
              </div>
            </div>

            <div className="flex flex-wrap content-start gap-[10px] self-stretch">
              <div className="flex items-start content-start gap-[10px]">
                <div className="flex p-2 justify-center items-center gap-[10px] flex-shrink-0 rounded-[100px] bg-success-50">
                  <span className="text-[12px] leading-[14.4px] text-primary-100">
                    1 week
                  </span>
                </div>
                <div className="flex p-2 justify-center items-center gap-[10px] flex-shrink-0 rounded-[100px] bg-success-50">
                  <span className="text-[12px] leading-[14.4px] text-primary-100">
                    1 week
                  </span>
                </div>
                <div className="flex p-2 justify-center items-center gap-[10px] flex-shrink-0 rounded-[100px] bg-success-50">
                  <span className="text-[12px] leading-[14.4px] text-primary-100">
                    1 week
                  </span>
                </div>
                <div className="flex p-2 justify-center items-center gap-[10px] flex-shrink-0 rounded-[100px] bg-success-50">
                  <span className="text-[12px] leading-[14.4px] text-primary-100">
                    1 week
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetTimeline;
