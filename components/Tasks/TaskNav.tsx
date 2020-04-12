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

export const TaskNav: React.FC<{
  taskDescriptions: Array<{ id: number; description: string }>;
}> = ({ taskDescriptions }) => {
  return (
    <StyledTaskNav>
      <StyledIndividualTaskLink>
        <a href={`/`}>{`Hometasking Home`}</a>
        <span>&nbsp;|&nbsp;</span>
      </StyledIndividualTaskLink>
      {taskDescriptions
        .sort((t1, t2) => t1.id - t2.id)
        .map(t => {
          return (
            <StyledIndividualTaskLink key={`task-${t.id}`}>
              <a href={`/tasks/${t.id}`}>{`Task #${t.id}`}</a>
              {t.id < taskDescriptions.length && <span>&nbsp;|&nbsp;</span>}
            </StyledIndividualTaskLink>
          );
        })}
    </StyledTaskNav>
  );
};

export default TaskNav;
