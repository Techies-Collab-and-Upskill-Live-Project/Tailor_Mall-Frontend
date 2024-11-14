import { useContext, useEffect, useState } from "react";
import Container from "../Authentication/Container";
import SignupForm from "./SignupForm";
import VerifyMail from "../VerifyMail/VerifyMail";
import axios from "axios";
import { toast } from "sonner";
import QuestionScreen from "../PersonalizedQuestion/QuestionScreen";
import { UserContext } from "../../Context/UserContext";

const Signup = () => {
  const url = import.meta.env.VITE_API_ENDPOINT_URL;
  const [isMailVeriifed, setIsVerified] = useState(false);
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    phoneNo: "",
    password: "",
    country: "Nigeria",
    platform: "Facebook",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [psswdError, setPsswdError] = useState(null);
  const [hasSignup, setSignup] = useState(false);
  const { user, updateNewToken, token, clientId, updateClientId } =
    useContext(UserContext);

  const baseUrl =
    user === "client" ? `${url}/client/signup` : `${url}/designer/signup`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupDetails((prev) => ({ ...prev, [name]: value }));
    setErrorMessage((prev) => ({ ...prev, [name]: "" }));
    if (e.target.name == "password") {
      let password = e.target.value;
      const validatePasswrd = validatePassword(password);
      setPsswdError(validatePasswrd);
    }
  };

  const validateForm = (e) => {
    let errors = {};
    if (!signupDetails.email) {
      errors.email = "Email field cannot be empty";
    }
    if (!signupDetails.phoneNo) {
      errors.phoneNo = "Phone Number field cannot be empty";
    }
    if (!signupDetails.password) {
      errors.password = "Password must contain at least 8 characters";
    }
    if (!signupDetails.country) {
      errors.country = "Please input your country";
    }
    if (!signupDetails.platform) {
      errors.platform = "Please input where you hear about us";
    }
    return errors;
  };
  const validatePassword = (password) => {
    let errors = {};
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/;
    const upperCase = /[A-Z]/;
    if (!password || password.length < 8) {
      errors.length = "must contains at least 8 charcters";
    }
    if (!password || regex.test(password) == false) {
      errors.test = "must include numbers and symbols";
    }
    if (!password || upperCase.test(password) == false) {
      errors.upperCase = "must include an uppercase character";
    }
    return errors;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const validatePasswrd = validatePassword(signupDetails.password);
    const validatedForm = validateForm();

    try {
      if (
        Object.keys(validatePasswrd).length === 0 &&
        Object.keys(validatedForm).length === 0
      ) {
        // console.log(signupDetails);
        setIsLoading(true);
        const response = await axios.post(`${baseUrl}`, {
          country: signupDetails.country,
          email: signupDetails.email,
          password: signupDetails.password,
          phoneNumber: signupDetails.phoneNo,
          hearPlatformInfo: signupDetails.platform,
        });
        let clientid = response?.data?.data?._id;
        let token = response?.data?.data?.token;

        if (token) {
          localStorage.setItem("token", token);
          setSignup(true);
          updateNewToken(token);
          updateClientId(clientid);
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
      toast.warning(error?.response?.data?.message);
      setIsLoading(false);
    }
  };

  return (
    <div>
      {!hasSignup ? (
        <Container>
          <SignupForm
            errorMessage={errorMessage}
            handleSignup={handleSignup}
            handleChange={handleChange}
            signupDetails={signupDetails}
            psswdError={psswdError}
            isLoading={isLoading}
          />
        </Container>
      ) : (
        <QuestionScreen />
      )}
    </div>
  );
};

export default Signup;
