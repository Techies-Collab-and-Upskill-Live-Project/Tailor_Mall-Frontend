import { Link } from "react-router-dom";
import BigButton from "../Button/BigButton";
import { useState } from "react";
import QuestionFrame from "./QuestionsFrame";

const QuestionScreen = () => {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <>
      {!hasStarted ? (
        <div className="flex flex-col justify-center py-[375px] items-center bg-[#fff]">
          <div className="flex absolute top-1/2 translate-y-[-50%] items-center justify-center px-5 md:px-10 flex-col gap-10">
            <div className="flex flex-col items-center justify-center self-stretch">
              <h3 className="flex items-center justify-center self-stretch text-center text-[#111] text-xl md:text-[40px] font-bold leading-[120%] md:tracking-[-3.2px] lg:text-6xl lg:tracking-[-4.8px]">
                Hello, user
              </h3>
              <p className="flex p-[10px] text-center justify-center items-center gap-[10px] self-stretch text-lg lg:w-full leading-[140%] md:w-[644px]">
                For a personalized experience, please take a few minutes to
                answer these questions.
              </p>
            </div>

            <div className="flex py-6 px-3 flex-col w-full md:flex-row-reverse items-center justify-center md:justify-around gap-6">
              <BigButton
                submit={() => setHasStarted(true)}
                text="Get started"
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
        </div>
      ) : (
        <QuestionFrame />
      )}
    </>
  );
};

export default QuestionScreen;
