import { useState } from "react";
import Container from "../Authentication/Container";
import SigninForm from "./SigninForm";

const Signin = () => {
  const baseUrl =
    "https://tailors-mall-backend.onrender.com/api/v1/designer/signup";
  const [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [PasswrdError, setPasswrdError] = useState(false);

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
      setEmailError(true);
    }
    if (!signinDetails.password) {
      errors.password = "Password must contain at least 8 characters";
      setPasswrdError(true);
    }
    return errors;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const validated = validateForm(signinDetails);

    try {
      if (
        Object.keys(validatePasswrd).length === 0 &&
        Object.keys(validateForm).length === 0 &&
        Object.keys(validated).length === 0
      ) {
        console.log(signupDetails);
        setIsLoading(true);
        const response = await axios.post(`${baseUrl}/client/signup"`, {
          email: signupDetails.email,
          password: signupDetails.password,
          confirmPassword: signupDetails.confirmPassword,
          phoneNumber: signupDetails.phoneNo,
        });
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        //     const data = await response.json();
        //     setSuccess('Signup successful!');
        //     setError('');
        //     console.log(data);
      } else {
        setErrorMessage(validateForm);
        console.log(errorMessage);
      }
    } catch (error) {
      console.log(error);

      // setError('Signup failed. Please try again.');
      //     setSuccess('');
      //     console.error('Error:', error);
    }
  };

  return (
    <div>
      <Container>
        <SigninForm
          signinDetails={signinDetails}
          handleOnChange={handleOnChange}
        />
      </Container>
    </div>
  );
};

export default Signin;
