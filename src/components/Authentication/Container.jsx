// import Wall2 from "../../assets/"
import Wall1 from "./assets/clientWall1.png"

const Container = ({children}) => {
  return (
    // <div className="border-red-600 border">
    <div className="w-full flex h-screen">
      <div className="hidden lg:block w-[55%]">
        <img className="w-full object-cover" src={Wall1} />
      </div>

      <div className="w-full lg:w-1/2">
       {children}
      </div>
    </div>
    // </div>
  );
};

export default Container;
