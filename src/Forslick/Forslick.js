import { React, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterUppage = () => {
  const [counteron, setCounteron] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounteron(true)}
      onExit={() => setCounteron(false)}
    >
      <div
        style={{
          width: "100%",
          background: "black",
          marginTop: "1000px",
          marginBottom: "300px",
          color: "white",
          padding: "50px",
        }}
      >
        <h1>
          {counteron && <CountUp start={0} end={100} duration={2} delay={0} />}+
        </h1>
      </div>
    </ScrollTrigger>
  );
};
export default CounterUppage;
