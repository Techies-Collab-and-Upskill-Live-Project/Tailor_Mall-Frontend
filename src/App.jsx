import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./../src/App.css";
import Welcome from "./components/Welcome/Welcome";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import "./App.css";
import QuestionScreen from "./components/PersonalizedQuestion/QuestionScreen";
import SetupProfile from "./Pages/ProfileCreation/SetupProfile";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import DesignerProfile from "./Pages/DesignerProfile/DesignerProfile";
import { Toaster } from "sonner";
import ProfilePendingApplication from "./components/Profile/ProfilePendingApplication";
import ProfileDoneJobs from "./components/Profile/ProfileDoneJobs";
import { createContext, useContext, useState } from "react";
import UserProfile from "./Pages/UserProfile/UserProfile";
import UploadWorkHome from "./Pages/UploadWork/UploadWorkHome";
import UploadWorkForm1 from "./Pages/UploadWork/UploadWorkForm1";
import JobApplication from "./Pages/JobApplications/JobApplication";
import JobApplicationDetails from "./Pages/JobApplications/JobApplicationDetails";
import JobApplicationUpload from "./Pages/JobApplicationUpload/JobApplicationUpload";
import CreateJobPost from "./Pages/JobPosting/CreateJobPost/CreateJobPost";
import { UserContext, UserProvider } from "./Context/UserContext";
import JobReview from "./Pages/JobPosting/JobDetails/JobReview/JobReview";
import JobDescription from "./Pages/JobPosting/JobDetails/JobDescription/JobDescription";
import DesignsCard from "./components/Designs/DesignCard";
import JobTesting from "./Pages/JobApplications/JobTesting";
import CreateNewJob from "./Pages/JobPosting/CreateJob/CreateJob";
import HomePage from "./Pages/Homepage";
import Layout from "./Pages/Community/communityLayouts/Layout";
import Chat from "./Pages/Community/Chats/chat";
import SideMenu from "./Pages/SideMenu/SideMenu";

export const userProfileContext = createContext();

export const PrivateRoutes = () => {
  const { isAuthenticated } = useContext(UserContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

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
              <Route path="/home" element={<HomePage />} />
              <Route path="/question" element={<QuestionScreen />} />
              <Route path="/setup-profile" element={<SetupProfile />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/upload-work" element={<UploadWorkHome />} />
              <Route path="/upload-work-1" element={<UploadWorkForm1 />} />
              <Route path="/designer-profile" element={<DesignerProfile />} />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/jobupload" element={<JobApplicationUpload />} />
              <Route path="/jobs/:id" element={<JobApplicationDetails />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/jobs" element={<JobApplication />} />
                <Route path="/createjob" element={<CreateNewJob />} />
                <Route path="/jobapply" element={<JobApplicationUpload />} />
              </Route>
              {/* <Route path="/community" element={<Layout />}> */}
              <Route path="/community" element={<Layout />}>
                {/* <Route index element={<Chat />} /> */}
                <Route path="chat" element={<Chat />} />
                <Route path="side" element={<SideMenu />} />
              </Route>
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
