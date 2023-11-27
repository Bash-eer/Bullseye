import React from "react";
import Headerpage from "../src/Headerpage/Headerpage";
import Home from "./Home/Home";
import Training from "./Training/Training";
import About from "./Aboutus/About";
import Experience from "./Experience/Experience";
import Modal from "./Experience/Experience";
import Gun from "./Gundetails/Gundetail";
import Event from "./Event/Event";
import Service from "./Service/Service";
import Client from "./Client/Client";
import Price from "./Price/Price";
import Facility from "./Facility/Facility";
import Blog from "./Blog/Blog";
import Map from "./Map/Map";
import Foot from "./Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Training />
      <About />

      <Modal />
      <Gun />
      <Event />
      <Service />
      <Client />
      <Price />
      <Facility />
      <Blog />
      <Map />
    </div>
  );
}

export default App;
