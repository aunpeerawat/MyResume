import React from "react";
import Header from "./components/Header";
import NavScroll from "./components/NavScroll";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <NavScroll />
      <Profile />
      <Skills />
      <Certificates />
      </div>
  );
}
export default App;