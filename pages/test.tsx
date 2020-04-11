import React from "react";
import TimeStartsNow from "../components/TimeStartsNow";
import Timer from "../components/Timer";

const TestPage: React.FC<{}> = () => (
  <div>
    <TimeStartsNow />
    <Timer
      startTime={new Date("March 22, 2020 09:00")}
      endTime={new Date("March 24, 2020 15:00")}
    />
  </div>
);

export default TestPage;
