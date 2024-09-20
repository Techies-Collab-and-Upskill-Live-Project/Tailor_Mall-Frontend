import { Link, Route, Router, Routes } from "react-router-dom";
import "./../src/App.css"
import Welcome from "./components/Welcome/Welcome";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage";
import QuestionScreen from "./components/PersonalizedQuestion/QuestionScreen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/question" element={<QuestionScreen />} />
      {/* <Route path="user" element={<UserList />} /> */}
    </Routes>
  );
};

export default App;
