import JobContainer from "../JobContainer";
import edit from "../../assets/fi_edit.png";
import img1 from "../../assets/unsplash_dJNVojMZhGU.png";

const JobReview = () => {
  const title = "Review";
  const detail =
    "Risus ut dolor mauris molestie est diam. Massa pellentesque tristique vestibulum vivamus scelerisque eu sagittis. Quam habitasse aenean fames mauris amet volutpat neque. ";
  const description =
    "We are seeking a skilled designer to create modern, comfortable and durable school uniforms for children ages 5 to 12. The uniforms  should reflect the school's brand while incorporating practically for everyday wear. You will work closely with the school’s administration to ensure the designs meet their requirements for quality, style, and budget.";
  const responsibility = [
    "Design school, uniforms, including shirts, pants, skirts, and blazers.",
    "Choose appropriate fabrics and materials for durability and comfort.",
    "Ensure the uniforms align with the school’s identity and colors.",
    "Collaborate on size and fit specifications to accommodate a range of ages",
  ];

  return (
    <JobContainer title={title} detail={detail}>
      <div className="flex flex-col gap-8 self-stretch lg:w-[90%]">
        <div className="flex p-4 flex-col items-center self-stretch rounded-2xl border border-foundationGrey-50">
          <div className="flex pb-5 items-center justify-between self-stretch border-b border-foundationGrey-50">
            <h5 className="text-xl font-bold leading-6">Basic job details</h5>
            <div className="flex items-center p-3 rounded-[69.231px] bg-primaryGreen-50">
              <img src={edit} className=" w-3 h-3" alt="" />
            </div>
          </div>

          <div className="flex flex-col pt-5 gap-6 self-stretch">
            <div className="flex flex-col gap-4 self-stretch">
              <h5 className="text-xl font-medium leading-6 self-stretch">
                Job Title
              </h5>
              <p className="text-base text-secondary leading-[22.4px]">
                Children School uniform
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-4 items-center self-stretch rounded-2xl border border-foundationGrey-50 bg-white">
          <div className="flex pb-5 items-center justify-between self-stretch border-b border-foundationGrey-50">
            <h5 className="text-xl font-bold leading-6">
              Job Descrition and Requirement
            </h5>
            <div className="flex items-center p-3 rounded-[69.231px] bg-primaryGreen-50">
              <img src={edit} className=" w-3 h-3" alt="" />
            </div>
          </div>

          <div className="flex pt-5 flex-col gap-6 self-stretch">
            <div className="flex flex-col gap-4">
              <h6 className="text-xl font-medium leading-6">Job description</h6>
              <p className="self-stretch text-base leading-[22.px] text-secondary">
                {description}
              </p>

              <div>
                <p className="self-stretch text-base leading-[22.px] text-secondary">
                  Key responsibility
                </p>
                <ul>
                  {responsibility.map((item, index) => (
                    <li className="list-disc">{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4 flex-col">
              <h5 className="text-xl font-bold leading-6">Skill required</h5>

              <div className="flex flex-start content-start gap-[10px] self-stretch flex-wrap">
                <div className="flex p-5 justify-center items-center gap-[10px] rounded-[100px] bg-success-50">
                  <p className="text-[14px] leading-5 text-primary-100">
                    Fashion illustration
                  </p>
                </div>
                <div className="flex p-5 justify-center items-center gap-[10px] rounded-[100px] bg-success-50">
                  <p className="text-[14px] leading-5 text-primary-100">
                    Silhouette ‘n’ Proportion
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h5 className="text-xl font-semibold leading-6">
                Applicants qualification
              </h5>
              <p className="text-base leading-[22.4px]">Intermediate</p>
            </div>

            <div className="flex flex-col gap-4 self-stretch">
              <h5 className="text-xl font-semibold leading-6">
                Files and documents
              </h5>

              <div className="flex p-3 justify-between items-center self-stretch rounded-2xl bg-[#f7f7f7]">
                <div className="flex items-center gap-4">
                  <img src={img1} alt="" />
                  <p className="leading-4 text-[12px]">
                    Jaycris_complex_video.mp4
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex p-4 flex-col items-center self-stretch border border-foundationGrey-50 rounded-2xl">
          <div className="flex pb-5 items-center justify-between self-stretch">
            <h5 className="text-xl font-bold leading-6">Budget & Timeline</h5>
            <div className="flex items-center p-3 rounded-[69.231px] bg-primaryGreen-50">
              <img src={edit} className=" w-3 h-3" alt="" />
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 self-stretch ">
            <div className="flex flex-col gap-4">
                <h6 className="text-base leading-[22.4px]">Budget</h6>
                <p className="text-base leading-[22.4px] text-secondary">Fixed price - <span className="font-bold">$ 10, 000.00</span></p>
            </div>
            <div className="flex flex-col gap-4">
                <h6 className="text-base leading-[22.4px]">Timeline</h6>
                <p className="text-base leading-[22.4px] text-secondary">4 weeks</p>
            </div>
          </div>
        </div>
      </div>
    </JobContainer>
  );
};

export default JobReview;
