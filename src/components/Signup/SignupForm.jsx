import ButtonLink from "../Button/Button";
import Mail from "../../assets/fi_mail.png";
import BigButton from "../Button/BigButton";

const SignupForm = () => {

  const submit = (e) => {
    console.log(e);
  }

  return (
    <div className="flex flex-col gap-4 bg-white px-[20px] py-[25px] lg:px-[30px]">
      <div className="flex flex-col gap-4 mb-4 md:gap-5">
        <h2 className="font-extrabold text-[#111111] text-4xl tracking-[-4%] text-center md:text-5xl">
          LOGO
        </h2>
        <h5 className="font-bold text-xl text-[#000000] md:text-[28px] leading-8">
          Create an account
        </h5>
      </div>

      <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
        <div className="flex flex-shrink-0 gap-3 md:gap-8 lg:gap-4">
          <ButtonLink />
          <ButtonLink isMain />
        </div>

        <div className="flex p-2 md:gap-8">
          <div className="border-t-[0.5px] w-[122px] border-black self-center md:w-[287px] lg:w-[273px]"></div>
          <p className="mx-2 text-base font-normal text-[#bcbcbc] md:text-xl leading-6">OR</p>
          <div className="border-t-[0.5px] w-[122px] border-black self-center md:w-[287px] lg:w-[273px]"></div>
        </div>

        <form action="" className="flex flex-col gap-4 md:gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 text-base">
              <label className="font-medium text-black" htmlFor="">
                Work email
              </label>
              <div className="border border-[#bcbcbc] rounded-lg h-9 flex items-center gap-2 px-4 md:h-12">
                <img className="w-5 h-5" src={Mail} alt="" />
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className="border-none outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 text-base">
              <label htmlFor="" className="font-medium text-black">Country of Residence</label>
              <div className="border border-[#bcbcbc] rounded-lg h-9 flex items-center gap-2 px-4 md:h-12 justify-between">
                <select name="" id="" className="flex justify-between border-none outline-none">
                  Select your country of Residence
                  <option value="nigeria">Select your country of residency</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="nigeria">Nigeria</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-base">
              <label className="font-medium text-black" htmlFor="">
                Phone Number
              </label>
              <div className="border border-[#bcbcbc] rounded-lg h-9 flex items-center gap-2 px-4 md:h-12">
                <img className="w-5 h-5" src={Mail} alt="" />
                <input
                  type="text"
                  placeholder="+234 81371125987"
                  className="border-none outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 text-base">
              <label className="font-medium text-black" htmlFor="">
                Password
              </label>
              <div className="border border-[#bcbcbc] rounded-lg h-9 flex items-center gap-2 px-4 md:h-12">
                <img className="w-5 h-5" src={Mail} alt="" />
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="border-none outline-none"
                />
              </div>
            </div>
          </div>

            <BigButton handleSubmit={submit} text="Create an account" />
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
