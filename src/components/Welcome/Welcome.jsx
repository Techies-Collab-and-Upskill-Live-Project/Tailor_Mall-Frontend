import { Link } from "react-router-dom";
import BigButton from "../Button/BigButton";
import ButtonLink from "../Button/Button";
import { WelcomeData } from "./WelcomeData";

const Welcome = () => {
  return (
    <div className="flex flex-col absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="flex flex-col gap-3 md:gap-8">
        <div>
          <h1 className="text-[#111] font-bold text-xl text-center md:text-4xl -tracking-[-4%] lg:text-6xl leading-[72px]">
            Hello, Welcome
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          {WelcomeData.map((item, index) => (
            <Link
              key={index}
              className="flex flex-col gap-[6px] border p-5 w-[300px] md:w-fit border-[#BCBCBC] rounded-3xl"
            >
              <h3 className="text-base font-bold text-[#111] md:text-xl lg:text-2xl">{item.title}</h3>
              <p className="text-[#282828] text-[10px] font-normal md:w-[280px] md:text-base lg:text-[16px]">
                {item.content}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <BigButton text="Create an account" />

          <p className="font-normal text-sm leading-4 text-center md:text-base md:leading-[22.4px] lg:text-xl">
          I’m already a user
            <Link className="ml-2 text-[#008080] font-medium">Login</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Welcome;
