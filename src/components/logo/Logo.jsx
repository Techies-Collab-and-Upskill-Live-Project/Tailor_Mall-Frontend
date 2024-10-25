import { Link } from "react-router-dom";
import logo from "../../assets/Tailoralogo.png";

const Logo = () => {
  return (
    <Link to="/home">
      <img
        src={logo}
        className="lg:hidden borde border-green-600 w-[200px] self-center"
        alt=""
      />
    </Link>
  );
};

export default Logo;
