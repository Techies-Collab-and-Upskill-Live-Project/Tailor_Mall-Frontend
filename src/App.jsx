import { Link, Route, Router, Routes } from "react-router-dom";
import Container from "./components/Authentication/Container";
import Welcome from "./components/Welcome/Welcome";
import Signup from "./components/Signup/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="user" element={<UserList />} /> */}
    </Routes>
  );
};

export default App;
