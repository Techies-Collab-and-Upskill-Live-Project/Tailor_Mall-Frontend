import { useState } from "react";
import Container from "../Authentication/Container";
import SignupForm from "./SignupForm";
import VerifyMail from "../VerifyMail/VerifyMail";

const Signup = () => {
  const [isMailVeriifed, setIsVerified] = useState(false)
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: ""
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  
  
  const handleSignup = async (e) => {
    e.preventDefault();

    const userDetails = { name, phone };

    try {
      const response = await fetch('http://localhost:5500/api/v1/client/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSuccess('Signup successful!');
      setError('');
      console.log(data);
    } catch (error) {
      setError('Signup failed. Please try again.');
      setSuccess('');
      console.error('Error:', error);
    }
  };




  return ( 
    <div>
      {!isMailVeriifed ? 
      <Container>
        <SignupForm VerifyMail={VerifyMail} signu setIsVerified={setIsVerified} />
      </Container>
      : 
      <VerifyMail />
      }
    </div>
   );
}
 
export default Signup;