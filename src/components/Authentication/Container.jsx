import ButtonLink from "../Button/Button";
import Signup from "../Signup/Signup";


const Container = () => {
  return (
    // <div className="border-red-600 border">
    <div className="w-full flex h-screen">
      <div className="hidden relative bg-blue-600 lg:flex w-1/2">
        <p className="absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%]">
          Lorem ipsum dolor sit, amet consecte Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Hic accusantium molestias ex labore
          magni eius, sint ipsam voluptates cupiditate, reprehenderit, saepe
          harum consequatur odit minus aperiam vero totam fugiat quod. tur
          adipisicing elit. Quibusdam, vitae.
        </p>
      </div>

      <div className="w-full lg:w-1/2">
       <Signup />
      </div>
    </div>
    // </div>
  );
};

export default Container;
