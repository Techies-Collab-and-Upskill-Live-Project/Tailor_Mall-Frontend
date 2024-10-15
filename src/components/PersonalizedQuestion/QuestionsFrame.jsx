import { useState } from "react";
import { QuestionData } from "./Questions";
import BigButton from "../Button/BigButton";
import { Link, useNavigate } from "react-router-dom";
import useActive from "../../Hooks/useActive";

const QuestionFrame = () => {
  const [count, setCounter] = useState(0);
  const [progress, setProgress] = useState([1, 2, 3, 4]);
  const navigate = useNavigate();
  const { active, onActive } = useActive();
  // let active = false;

  const increaseCounter = () => {
    setCounter((count) => count + 1);
    console.log(active);
    if (count === progress.length - 1) {
      setCounter(3);
      navigate("/setup-profile");
    }
    console.log(count);
  };

  return (
    <div className="flex flex-col items-center gap-6 md:gap-10 flex-shrink-0 justify-center md:self-stretch">
      <div className="hidden md:flex absolute top-[30%] gap-[10px]">
        {progress.map((item, index) => (
          <div
            key={index}
            className={`h-2 w-[60px] md:w-[120px] dot rounded-[100px] 
            
              `
            }
              // ${index === count ? "bg-primary-100" : "bg-primaryGreen-50"}
          ></div>
        ))}
      </div>
      <div className="">
        {QuestionData.map(
          (question, id) =>
            id === count && (
              <div
                key={id}
                className="flex px-5 mt-5 flex-col justify-center items-center gap-8 absolute w-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] lg:px-[100px] "
              >
                <h5 className="text-[#000] text-center text-lg font-bold leading-[120%] md:text-[40px] md:tracking-[-3.2px] md:w-full">
                  {question.question}
                </h5>
                {question.input && (
                  <div className="flex flex-col justify-center items-center gap-2 self-stretch rounded-lg">
                    <input
                      type="text"
                      className="flex outline-none flex-col justify-center w-full items-start px-4 gap-2 border h-12 rounded-lg border-[#BCBCBC]"
                    />
                  </div>
                )}
                {question.options && (
                  <div className="flex flex-col md:flex-row justify-center items-center gap-4 self-stretch md:gap-6 md:self-stretch">
                    {question.options.map((option, index) => (
                      <div
                        onClick={() => onActive(index)}
                        key={index}
                        className={`flex py-4 flex-col justify-center items-center gap-[10px] self-stretch border border-[#BCBCBC] rounded-2xl md:p-[52px] ${
                          active === index ? "bg-primary-100" : "bg-transparent"
                        }`}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-col gap-6 md:flex-row w-full md:items-center md:justify-evenly">
                  <Link
                    to="/setup-profile"
                    className="text-[#008080] text-center self-center text-base font-medium md:dot"
                  >
                    Skip
                  </Link>
                  <BigButton
                    submit={() => increaseCounter()}
                    className="md:dot leading-[140%] md:py-[12px] md:text-[16px] md:w-[30%]"
                    text="Next"
                  />
                  {/* <button
                  // rounded-[100px] flex items-center justify-center px-3 bg-[#008080] h-10 text-[#E6F2F2] text-[12px] leading-4 font-medium md:text-base md:leading-[16.8px] lg:text-[16px] md:w-full ${className}`}
                  className="rounded-[100px] bg-primary-100 flex h-10 py-3 px-4 w-full items-center justify-center gap-3 self-stretch text-primaryGreen-50"
                  >Next</button> */}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default QuestionFrame;
