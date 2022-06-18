import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const Home = dynamic(() => import("../components/home"));

// axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.baseURL = "https://email.block-s.io/";
axios.defaults.withCredentials = false;

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};
export default App;
