import { useState } from "react";
import Container from "../Authentication/Container";
import SignupForm from "./SignupForm";
import VerifyMail from "../VerifyMail/VerifyMail";

const Signup = () => {
  const [isMailVeriifed, setIsVerified] = useState(false)

  return ( 
    <div>
      {!isMailVeriifed ? 
      <Container>
        <SignupForm VerifyMail={VerifyMail} setIsVerified={setIsVerified} />
      </Container>
      : 
      <VerifyMail />
      }
    </div>
   );
}
 
export default Signup;