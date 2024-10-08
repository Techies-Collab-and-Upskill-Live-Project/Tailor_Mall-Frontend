import { Link, Route, Router, Routes } from "react-router-dom";
import "./../src/App.css";
import Welcome from "./components/Welcome/Welcome";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import QuestionScreen from "./components/PersonalizedQuestion/QuestionScreen";
import { Toaster } from "sonner";
import SetupProfile from "./Pages/ProfileCreation/SetupProfile";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import JobApplication from "./Pages/JobApplications/JobApplication";
import JobApplicationDetails from "./Pages/JobApplications/JobApplicationDetails";
import JobApplicationUpload from "./Pages/JobApplicationUpload/JobApplicationUpload";
import CreateJobPost from "./Pages/JobPosting/CreateJobPost/CreateJobPost";
import JobDetails from "./Pages/JobPosting/JobDetails/JobDetails";
import { UserProvider } from "./Context/UserContext";

const App = () => {
  return (
    <UserProvider>
    <div className="">
      <Toaster position="top-right" />
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/question" element={<QuestionScreen />} />
      <Route path="/setup-profile" element={<SetupProfile />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/jobs" element={<JobApplication />} />
      <Route path="/jobupload" element={<JobApplicationUpload />} />
      <Route path="/jobs/:id" element={<JobApplicationDetails  />} />
      <Route path="/jobpost" element={<JobDetails />} />

      {/* <Route path="user" element={<UserList />} /> */}
    </Routes>
    </div>
    </UserProvider>
  );
};

export default App;
