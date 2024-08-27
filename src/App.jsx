import { Link, Route, Router, Routes } from "react-router-dom";
import Container from "./components/Authentication/Container";
import Welcome from "./components/Welcome/Welcome";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      {/* <Route path="user" element={<UserList />} /> */}
    </Routes>
  );
};

export default App;
