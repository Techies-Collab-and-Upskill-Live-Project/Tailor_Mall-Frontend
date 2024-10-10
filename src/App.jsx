import { Link, Route, Router, Routes } from "react-router-dom";
import "./../src/App.css";
import Welcome from "./components/Welcome/Welcome";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage";
import SetupProfile from "./Pages/ProfileCreation/SetupProfile";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import UploadWork from "./Pages/UploadProject/UploadProject";
import DesignerProfile from "./Pages/DesignerProfile/DesignerProfile";
import { Toaster, toast } from "sonner";

const App = () => {
  return (
    <>
      <Toaster position="top-right" font-size="50px" />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/setup-profile" element={<SetupProfile />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/upload-project" element={<UploadWork />} />
        <Route path="/designer-profile" element={<DesignerProfile />} />

        {/* <Route path="user" element={<UserList />} /> */}
      </Routes>
    </>
  );
};

export default App;
