import { useState } from "react";
import BigButton from "../Button/BigButton";
import { Link } from "react-router-dom";
import VerifyMailModal from "./VerifyMailModal";

const VerifyMail = () => {
  const otp = [1, 2, 3, 4];
  const [otpValues, setOtpValues] = useState(["", "", "", "", ""]);
  const [resendMail, setResendMail] = useState(false);

  const handleCodesChange = (index, event) => {
    const newCodes = [...otpValues];
    newCodes[index] = event.target.value;
    setOtpValues(newCodes);

    if (event.target.value.length === 1 && index < 4) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }

    let codes = newCodes.join("");
    console.log(codes);
    
    
  };

  return (
    <>
      <div
        className={`
        flex px-5 gap-7 flex-col absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] ${
          resendMail
            ? "h-full w-screen bg-[#000000] opacity-[10%] justify-center -z-50"
            : "bg-white"
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h5 className="text-xl leading-6 font-bold text-[#111111]">
              Email Verification
            </h5>
            <p className="text-[#535353] text-base leading-[22.4px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, exercitationem?
            </p>
          </div>

          <form>
            <div className="flex flex-row items-center justify-evenly">
              {otpValues.map((input, index) => (
                <input
                  type="text"
                  id={`code-input-${index}`}
                  onChange={(e) => handleCodesChange(index, e)}
                  className="text-center outline-none border-none bg-[#E6f2f2] text-[#535353] text-xl font-medium w-10 h-10 rounded-xl"
                />
              ))}
            </div>
          </form>
        </div>

        <div className="">
          <BigButton className="w-[300px]" text="Check mail" />

          <div className="flex items-center justify-center gap-3 py-4">
            <p className="font-normal text-sm leading-[22.4px] text-center text-[#535353]">
              Didn’t receive verification code?
            </p>
            <Link
              onClick={() => setResendMail(true)}
              className="text-[#008080] text-base leading-[22.4px] font-medium"
            >
              Resend
            </Link>
          </div>
        </div>
      </div>
      {resendMail && <VerifyMailModal setResendMail={setResendMail} />}
    </>
  );
};

export default VerifyMail;
