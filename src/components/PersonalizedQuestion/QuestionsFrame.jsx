import { useState } from "react";
import { QuestionData } from "./Questions";
import BigButton from "../Button/BigButton";
import { Link } from "react-router-dom";

const QuestionFrame = () => {
  const [count, setCounter] = useState(0);
  const [progress, setProgress] = useState([1,2,3,4])
  let active = false;

  const increaseCounter = () => {
    setCounter(count => count+1)
    active = true
    if (count === progress.length - 1) {
      setCounter(3)
    }

    console.log(count);
    
  }

  return (
    <div className="flex flex-col items-center gap-6 md:gap-10 flex-shrink-0 justify-center md:self-stretch">
      <div className="flex pt-5 px-5 md:p-[70px] items-start gap-[10px]">
        {progress.map((item, index) => (
          <div key={index} className={`h-2 w-[60px] md:w-[120px] dot rounded-[100px] ${active ? "bg-[#e6f2f2]" : "bg-[#008080]"}`}></div>
        ))}
      </div>
      <div className="">
        {QuestionData.map(
          (question, id) =>
            id === count && (
              <div
                key={id}
                className="flex px-5 mt-5 flex-col justify-center items-center gap-8 absolute w-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] "
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
                      <div key={index} className="flex py-4 flex-col justify-center items-center gap-[10px] self-stretch border border-[#BCBCBC] rounded-2xl md:p-[52px]">
                        {option}
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-col gap-6 md:flex-row-reverse">
                  <BigButton
                    submit={() => increaseCounter()}
                    className="w-[300px] md:dot md:w-[350px] leading-[140%] md:py-[12px] md:text-[16px]"
                    text="Next"
                  />
                  <Link className="text-[#008080] text-center self-center text-base font-medium md:dot">
                    Skip
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
