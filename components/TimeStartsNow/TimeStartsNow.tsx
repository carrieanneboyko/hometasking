import React from "react";
import styled from "styled-components";

const TaskmasterH1 = styled.h1`
  font-family: "Special Elite";
`;

const TimeStartsNow: React.FC<{ text?: string }> = ({ text }) => (
  <div className="taskmaster">
    <TaskmasterH1>{text || `Your time starts now.`}</TaskmasterH1>
  </div>
);

export default TimeStartsNow;
