import React from "react";
import styled from "styled-components";

const TaskmasterH1 = styled.h1`
  font-family: "Special Elite";
`;

const TimeStartsNow: React.FC<{}> = () => (
  <div className="taskmaster">
    <TaskmasterH1>Your time starts now.</TaskmasterH1>
  </div>
);

export default TimeStartsNow;
