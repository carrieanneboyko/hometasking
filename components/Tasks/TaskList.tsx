import React from "react";
import styled from "styled-components";
import addHours from "date-fns/addHours";
import { format } from "date-fns";
import taskList, { Task } from "./data/index";

const timeToEnglish = (time: Date): string =>
  format(time, `yyyy LLLL do, HH:mm (OOOO)`);

interface TaskSummary {
  number: string;
  description: string;
  url: string;
  startTime: Date;
  endTime: Date;
}
const StyledTaskListFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledTaskList = styled.div`
  background: rgba(0, 0, 0, 0.1);
  min-width: 580px;
`;

const StyledTaskListLi = styled.p`
  padding-bottom: 10px;
`;

const TaskList: React.FC<{
  taskDescriptions: Array<{ id: number; description: string }>;
}> = ({ taskDescriptions }) => {
  return (
    <div>
      Task List:
      <StyledTaskListFlex>
        <StyledTaskList>
          {taskDescriptions.map(({ id, description }) => (
            <StyledTaskListLi key={description}>
              <a href={`Tasks/${id}`}>
                {`Task #${id}`}: {description}
              </a>
            </StyledTaskListLi>
          ))}
        </StyledTaskList>
      </StyledTaskListFlex>
    </div>
  );
};

export default TaskList;
