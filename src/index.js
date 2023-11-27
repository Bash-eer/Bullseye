import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "react-modal-video/scss/modal-video.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Aboutpage/About";
import Contactpage from "./Contactpage/Contact";
import Headerpage from "../src/Headerpage/Headerpage";
import Foot from "./Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Headerpage />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/contact" element={<Contactpage />}></Route>
    </Routes>
    <Foot />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
