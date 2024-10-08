import { useContext } from "react";
import Client from "./assets/ClientWallpaper.png";
import Designer from "./assets/DesignerWallpaper.png";
import { UserContext } from "../../Context/UserContext";

const Container = ({ children }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="w-full flex h-screen">
      <div className="hidden lg:block w-[55%]">
        <img
          className="w-full object-cover"
          src={user === "client" ? Client : Designer}
        />
      </div>

      <div className="w-full lg:w-1/2">{children}</div>
    </div>
  );
};

export default Container;
