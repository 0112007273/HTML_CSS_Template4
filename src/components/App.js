import { Route, Routes } from "react-router-dom";
import "./css/style.css";
import "./css/all.min.css";
import Aside from "./components/Aside";
import NavBar from "./components/NavBar";
import Dashboard from "./components/DashBoard";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Courses from "./components/Courses";
import Freinds from "./components/Friends";
import Files from "./components/Files";
import Plans from "./components/Plans";

function App() {
  return (
    <>
      <Aside />
      <div className="tem">
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/projects" element={<Project />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/freinds" element={<Freinds />}></Route>
          <Route path="/files" element={<Files />}></Route>
          <Route path="/plans" element={<Plans />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
