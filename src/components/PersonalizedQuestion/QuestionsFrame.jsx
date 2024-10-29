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
    if (count === progress.length - 1) {
      setCounter(3);
      navigate("/setup-profile");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 md:gap-10 flex-shrink-0 justify-center md:self-stretch">
      <div className="hidden md:flex absolute top-[30%] gap-[10px]">
        {progress.map((item, index) => (
          <div
            key={index}
            className={`h-2 w-[60px] md:w-[120px] dot rounded-[100px] 
            
              `}
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
              


                {/* <div className="flex py-6 px-3 flex-col w-full md:flex-row-reverse items-center md:justify-around gap-6">
                  <Link
                    to="/setup-profile"
                    className="flex py-3 px-4 justify-center items-center dot rounded-[100px] w-full"
                  >
                    <span className="text-base text-primary-100 leading-[22.4px]">
                      Skip
                    </span>
                  </Link>
                  <BigButton
                    submit={() => increaseCounter()}
                    text="Next"
                    className="w-full md:[50%]"
                  />
                </div> */}


                <div className="flex py-6 px-3 flex-col w-full md:flex-row-reverse items-center justify-center md:justify-around gap-6">
              <BigButton
                submit={() => increaseCounter()}
                text="Next"
                className="w-full md:w-[50%]"
              />

              <Link
                to="/setup-profile"
                className="flex py-3 px-4 justify-center items-center dot rounded-[100px] w-full md:w-[50%]"
              >
                <span className="text-base w-full text-primary-100 leading-[22.4px]">
                  Skip
                </span>
              </Link>
            </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default QuestionFrame;
