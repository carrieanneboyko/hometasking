import React from "react";
import styled from "styled-components";

const StyledTaskNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const StyledIndividualTaskLink = styled.div`
  font-family: "Special Elite", Courier New, Courier, monospace;
`;

export const TaskNav = () => {
  return (
    <StyledTaskNav>
      <StyledIndividualTaskLink>
        <a href={`/`}>{`Hometasking Home`}</a>
        <span>&nbsp;|&nbsp;</span>
      </StyledIndividualTaskLink>
      {[1, 2, 3].map((tasknum: number, index: number, arr: number[]) => (
        <StyledIndividualTaskLink key={`task-${tasknum}`}>
          <a href={`/tasks/${tasknum}`}>{`Task #${tasknum}`}</a>
          {index < arr.length - 1 && <span>&nbsp;|&nbsp;</span>}
        </StyledIndividualTaskLink>
      ))}
    </StyledTaskNav>
  );
};

export default TaskNav;
