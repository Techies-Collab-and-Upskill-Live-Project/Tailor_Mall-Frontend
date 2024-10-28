import { Route, Routes } from "react-router-dom";
import "./../src/App.css";
import Welcome from "./components/Welcome/Welcome";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import QuestionScreen from "./components/PersonalizedQuestion/QuestionScreen";
import SetupProfile from "./Pages/ProfileCreation/SetupProfile";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import DesignerProfile from "./Pages/DesignerProfile/DesignerProfile";
import { Toaster } from "sonner";
import ProfilePendingApplication from "./components/Profile/ProfilePendingApplication";
import ProfileDoneJobs from "./components/Profile/ProfileDoneJobs";
import { createContext, useState } from "react";
import UserProfile from "./Pages/UserProfile/UserProfile";
import UploadWorkHome from "./Pages/UploadWork/UploadWorkHome";
import UploadWorkForm1 from "./Pages/UploadWork/UploadWorkForm1";
import JobApplication from "./Pages/JobApplications/JobApplication";
import JobApplicationDetails from "./Pages/JobApplications/JobApplicationDetails";
import JobApplicationUpload from "./Pages/JobApplicationUpload/JobApplicationUpload";
import CreateJobPost from "./Pages/JobPosting/CreateJobPost/CreateJobPost";
import { UserProvider } from "./Context/UserContext";
import JobReview from "./Pages/JobPosting/JobDetails/JobReview/JobReview";

export const userProfileContext = createContext();

const App = () => {
  const [userProfile, setUserProfile] = useState([
    "Suit-making",
    "Fabric Selection",
    "Children wear",
    "Wedding wears",
    "Fashion Illustration",
    "Sport kit",
  ]);

  return (
    <>
      <UserProvider>
       <div className="">
          <Toaster position="top-right" font-size="50px" />
          <userProfileContext.Provider value={{ userProfile, setUserProfile }}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/question" element={<QuestionScreen />} />
            <Route path="/setup-profile" element={<SetupProfile />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/upload-work" element={<UploadWorkHome />} />
            <Route path="/upload-work-1" element={<UploadWorkForm1 />} />
            <Route path="/designer-profile" element={<DesignerProfile />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/jobs" element={<JobApplication />} />
            <Route path="/jobupload" element={<JobApplicationUpload />} />
            <Route path="/jobs/:id" element={<JobApplicationDetails />} />
            <Route path="/createjob" element={<CreateJobPost />} />
            <Route
              path="/designer-profile/pending-application"
              element={<ProfilePendingApplication />}
            />
            <Route
              path="/designer-profile/done-jobs"
              element={<ProfileDoneJobs />}
            />
        </Routes>
      </userProfileContext.Provider>
      </div>
    </UserProvider>
    </>
  );
};

export default App;
