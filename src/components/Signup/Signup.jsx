import ButtonLink from "../Button/Button";

const Signup = () => {
  return (
    <div className="bg-white px-[20px] py-[60px]">
      <div className="flex flex-col gap-4">
        <h2 className="font-extrabold text-[#111111] text-4xl tracking-[-4%] text-center">LOGO</h2>
        <h5 className="font-bold text-xl text-[#000000]">Create an account</h5>
      </div>

      <div className="flex flex-shrink-0 gap-2">
        <ButtonLink />
        <ButtonLink isMain />
      </div>

      <div className="flex p-2">
        <div className="border-t-[0.5px] w-[70px] border-black"></div>
        <p>OR</p>
        <div className="border-t-[0.5px] w-[70px] border-black"></div>
      </div>

      <form action=""></form>
    </div>
  );
};

export default Signup;
