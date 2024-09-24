import { useState } from "react";
import Container from "../Authentication/Container";
import SignupForm from "./SignupForm";
import VerifyMail from "../VerifyMail/VerifyMail";
import axios from "axios";

const Signup = () => {
  const baseUrl =
    // "https://tailors-mall-backend.onrender.com/api/v1/client/signup";
    "https://tailors-mall-backend.onrender.com/api/v1";
  const [isMailVeriifed, setIsVerified] = useState(false);
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupDetails((prev) => ({ ...prev, [name]: value }));
    setErrorMessage((prev) => ({ ...prev, [name]: "" }));
    if (e.target.name == "password") {
      let password = e.target.value;
      const validatePasswrd = validatePassword(password);
      setErrorMessage(validatePasswrd);
    }
  };

  const validateForm = (e) => {
    let errors = {};
    if (!signupDetails.email) {
      errors.email = "Name input cannot be empty";
    }
    if (!signupDetails.phoneNo) {
      errors.email = "Phone Number field cannot be empty";
    }
    if (!signupDetails.password) {
      errors.password = "Password must contain at least 8 characters";
    }
    if (!signupDetails.confirmPassword) {
      errors.confirmPassword = "Please input your password";
    }
    return errors;
  };
  const validatePassword = (password, confirmPwrd) => {
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
  const confirmPassword = (password, conPassword) => {
    let errors = {};
    if (!conPassword || password.includes(conPassword) === false) {
      errors.confirm = "Password does not match";
    }
    return errors;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const validatePasswrd = validatePassword(signupDetails.password);
    const validatedForm = validateForm();
    const validated = confirmPassword(
      signupDetails.password,
      signupDetails.confirmPassword
    );

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
      }

      else {
        setErrorMessage(validateForm)
        console.log(errorMessage);
        
        
      }
    } catch (error) {
      // setError('Signup failed. Please try again.');
      //     setSuccess('');
      //     console.error('Error:', error);
    }
  };

  return (
    <div>
      {!isMailVeriifed ? (
        <Container>
          <SignupForm
            handleSignup={handleSignup}
            handleChange={handleChange}
            signupDetails={signupDetails}
          />
        </Container>
      ) : (
        <VerifyMail />
      )}
    </div>
  );
};

export default Signup;
