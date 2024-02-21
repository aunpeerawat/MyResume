import React from "react";
import Header from "./components/Header";
import NavScroll from "./components/NavScroll";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Activities from "./components/Activities";
import CodeExperience from "./components/CodeExperience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <NavScroll />
      <Profile />
      <Skills />
      <CodeExperience />
      <Certificates />
      <Projects />
      <Activities />
      <Footer />
      </div>
  );
}
export default App;