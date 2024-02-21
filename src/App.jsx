import React from "react";
import Header from "./components/Header";
import NavScroll from "./components/NavScroll";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Activities from "./components/Activities";
import CodeExperience from "./components/CodeExperience";
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <NavScroll />
      <Profile />
      <Skills />
      <CodeExperience />
      <Certificates />
      <Activities />
      </div>
  );
}
export default App;