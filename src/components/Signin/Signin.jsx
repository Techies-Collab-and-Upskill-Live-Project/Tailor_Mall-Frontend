import { useContext, useState } from "react";
import Container from "../Authentication/Container";
import SigninForm from "./SigninForm";
import { toast } from "sonner";
import axios from "axios";
import VerifyMail from "../VerifyMail/VerifyMail";
import { UserContext } from "../../Context/UserContext";

const Signin = () => {
  const url = import.meta.env.VITE_API_ENDPOINT_URL;

  const { user, updateNewToken, token, clientId, updateClientId } =
    useContext(UserContext);

  const baseUrl =
    user === "client" ? `${url}/client/login` : `${url}/designer/login`;

  const [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [hasSignin, setHasSignin] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSigninDetails((prev) => ({ ...prev, [name]: value }));
    // console.log(signinDetails);
    // setErrorMessage((prev) => ({ ...prev, [name]: "" }));
    // console.log(errorMessage);
  };

  const validateForm = (e) => {
    let errors = {};
    if (!signinDetails.email) {
      errors.email = "Name input cannot be empty";
    }
    if (!signinDetails.password) {
      errors.password = "Password must contain at least 8 characters";
    }
    return errors;
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    const validated = validateForm();

    console.log(signinDetails);

    try {
      if (Object.keys(validated).length === 0) {
        console.log(signinDetails);
        setIsLoading(true);
        const response = await axios.post(`${baseUrl}`, {
          email: signinDetails.email,
          password: signinDetails.password,
        });
        console.log(response);
        let token = response?.data?.data?.token;
        let clientid = response?.data?.data?._id;
        
        if (token) {
          localStorage.setItem("token", token);
          setHasSignin(true);
          updateNewToken(token)
          updateClientId(clientid)
          toast.success(response.data.msg);
        } else {
          console.log(response?.data?.message);
        }
        setIsLoading(false);
      } else {
        setErrorMessage(validateForm);
        console.log(errorMessage);
        toast.warning("Please check all input fields");
      }
    } catch (error) {
      console.log(error);

      toast.warning(error?.response?.data?.message || "Network error");
      setIsLoading(false);
    }
  };

  return (
    <div>
      {hasSignin ? (
        <VerifyMail />
      ) : (
        <Container>
          <SigninForm
            signinDetails={signinDetails}
            handleOnChange={handleOnChange}
            handleSignin={handleSignin}
            isLoading={isLoading}
          />
        </Container>
      )}
    </div>
  );
};

export default Signin;
