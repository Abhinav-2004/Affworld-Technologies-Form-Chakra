import React from "react";
import Navbar from "./components/Navbar";
import MainForm from "./components/MainForm/MainForm";
import Footer from "./components/Footer";
import "./App.css"
const App = () => {
  return (
    <div className="">
      <Navbar />
        <MainForm />
      <Footer />
    </div>
  );
};

export default App;
