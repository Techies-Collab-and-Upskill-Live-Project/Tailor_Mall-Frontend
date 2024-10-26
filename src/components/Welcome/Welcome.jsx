import { Link, useNavigate } from "react-router-dom";
import BigButton from "../Button/BigButton";
import logo from "../../assets/Tailoralogo.png"
import { WelcomeData } from "./WelcomeData";
import { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { toast } from "sonner";

const Welcome = () => {
  const [active, setActive] = useState(null);
  const [loaction, setLocation] = useState(null);
  const navigate = useNavigate();

  const { updateClient, updateDesigner, user } = useContext(UserContext);

  const onActive = (index) => {
    setActive(index);
  };

  const handleSubmit = () => {
    if (active === 0 || active === 1) {
      if (active === 0) {
        updateClient();
      } else if (active === 1) {
        updateDesigner();
      }
      navigate("signup");
    } else {
      active === null;
      toast.warning("Please choose a box!");
    }
    return;
  };
  const handleLogin = () => {
    console.log(user);
    if (active === 0 || active === 1) {
      if (active === 0) {
        navigate("signin");
      } else if (active === 1) {
        updateDesigner();
      }
      navigate("signin");
    } else {
      active === null;
      toast.warning("Please choose a box!");
    }
    return;
  };

  return (
    <>
      <div className="flex py-8 h-10 px-[40px] items-center gap-[3px] border border-foundationGrey-50">
        <img src={logo} alt="" />
      </div>

      <div className="flex flex-col absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] pt-7">
        <div className="flex flex-col gap-3 md:gap-8">
          <div>
            <h1 className="text-[#111] font-bold text-xl text-center md:text-4xl -tracking-[-4%] lg:text-6xl leading-[72px]">
              Hello, Welcome
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            {WelcomeData.map((item, index) => (
              <Link
                onClick={() => onActive(index)}
                key={index}
                className={`flex flex-col gap-[6px] border p-5 w-[300px] md:w-fit rounded-3xl transition duration-300 ${
                  active === index
                    ? "border-blue-500 bg-blue-400"
                    : "border-[#BCBCBC]"
                }`}
              >
                <h3 className="text-base font-bold text-[#111] md:text-xl lg:text-2xl">
                  {item.title}
                </h3>
                <p className="text-[#282828] text-[10px] font-normal md:w-[280px] md:text-base lg:text-[16px]">
                  {item.content}
                </p>
              </Link>
            ))}
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <BigButton
              className="w-[300px] md:w-[450px]"
              text="Create an account"
              submit={handleSubmit}
              to={location}
            />

            <p
              onClick={handleLogin}
              className="font-normal text-sm leading-4 text-center md:text-base md:leading-[22.4px] lg:text-xl"
            >
              I’m already a user
              <Link
                className="ml-2 text-[#008080] font-medium"
                onClick={handleLogin}
              >
                Login
              </Link>
            </p>

            <Link
              to="/home"
              className="flex py-0 px-3 justify-center items-center gap-3 self-stretch rounded-[100px]"
            >
              <span className="text-primary-100 text-[14px] font-medium leading-[16.8px]">
                Join as a guest
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
