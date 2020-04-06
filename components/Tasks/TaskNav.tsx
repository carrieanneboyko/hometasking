import React from "react";
import styled from "styled-components";
import range from "lodash/range";
import taskList, { Task } from "./data/index";

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
      {taskList.map((_t: Task, index: number) => (
        <StyledIndividualTaskLink key={`task-${index + 1}`}>
          <a href={`/tasks/${index + 1}`}>{`Task #${index + 1}`}</a>
          {index < taskList.length - 1 && <span>&nbsp;|&nbsp;</span>}
        </StyledIndividualTaskLink>
      ))}
    </StyledTaskNav>
  );
};

export default TaskNav;
