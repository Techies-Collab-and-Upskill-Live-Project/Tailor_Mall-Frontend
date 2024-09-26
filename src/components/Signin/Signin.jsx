import { useState } from "react";
import Container from "../Authentication/Container";
import SigninForm from "./SigninForm";
import { toast } from "sonner";
import axios from "axios";

const Signin = () => {
  const baseUrl =
    "https://tailors-mall-backend.onrender.com/api/v1/designer/signup";
  const [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSigninDetails((prev) => ({ ...prev, [name]: value }));
    console.log(signinDetails);
    setErrorMessage((prev) => ({ ...prev, [name]: "" }));
    console.log(errorMessage);

    // if (e.target.name == "password") {
    //   let password = e.target.value;
    //   const validatePasswrd = validatePassword(password);
    //   setErrorMessage(validatePasswrd);
    // }
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
        const response = await axios.post(`${baseUrl}/client/signup"`, {
          email: signinDetails.email,
          password: signinDetails.password,
        });
        console.log(response);
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
      } else {
        setErrorMessage(validateForm);
        console.log(errorMessage);
        toast.warning("Please check all input fields");
      }
    } catch (error) {
      toast.warning(error?.response?.data?.message || "Network error");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Container>
        <SigninForm
          signinDetails={signinDetails}
          handleOnChange={handleOnChange}
          handleSignin={handleSignin}
        />
      </Container>
    </div>
  );
};

export default Signin;
