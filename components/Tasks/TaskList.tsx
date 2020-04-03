import React from "react";
import styled from "styled-components";
import addHours from "date-fns/addHours";
import { format } from "date-fns";
import taskList, {Task} from './data/index';

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

const TaskList: React.FC<{}> = () => {
  return (
    <div>
      Task List:
      <StyledTaskListFlex>
        <StyledTaskList>
          {taskList.map((task: Task, index: number) => (
            <StyledTaskListLi key={task.description}>
              <a href={`Tasks/${index + 1}`}>
                {`Task #${index + 1}`}: {task.description}
              </a>
            </StyledTaskListLi>
          ))}
        </StyledTaskList>
      </StyledTaskListFlex>
    </div>
  );
};

export default TaskList;
