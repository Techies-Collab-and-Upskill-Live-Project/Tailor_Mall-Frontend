import wallpaper from "../../assets/Frame 134.png"
const Container = ({children}) => {
  return (
    // <div className="border-red-600 border">
    <div className="w-full flex h-screen">
      <div className="hidden lg:block w-[55%]">
        <img className="w-full object-cover" src={wallpaper} />
      </div>

      <div className="w-full lg:w-1/2">
       {children}
      </div>
    </div>
    // </div>
  );
};

export default Container;
