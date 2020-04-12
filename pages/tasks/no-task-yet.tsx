import React from "react";
import styled from "styled-components";

const StyledCentered = styled.div`
  text-align: center;
  margin: auto;
  width: 90%;
`;
const TaskmasterH1 = styled.h1`
  font-family: "Special Elite";
`;

const TaskmasterType = styled.div`
  font-family: "Special Elite", Courier New, Courier, monospace;
`;
const NoTaskYet: React.FC<{}> = () => (
  <StyledCentered>
    <TaskmasterH1>Your time does not start now.</TaskmasterH1>
    <TaskmasterType>{`Sorry. This task has not yet been assigned by the Taskmaster.`}</TaskmasterType>
    <img src="/img/taskmaster-seal.png" />
  </StyledCentered>
);

export default NoTaskYet;
