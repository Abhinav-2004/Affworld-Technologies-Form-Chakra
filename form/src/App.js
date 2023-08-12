import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainForm from "./components/MainForm/MainForm";
import Footer from "./components/Footer";
import { UserContextProvider } from "./UserContext";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <UserContextProvider>
        <MainForm />
      </UserContextProvider>
      <Footer />
    </div>
  );
};

export default App;
