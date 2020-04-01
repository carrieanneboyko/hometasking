import React from "react";
import styled from "styled-components";
import addHours from "date-fns/addHours";
import { format } from "date-fns";

const timeToEnglish = (time: Date): string =>
  format(time, `yyyy LLLL do, HH:mm (OOOO)`);

interface TaskSummary {
  number: string;
  description: string;
  url: string;
  startTime: Date;
  endTime: Date;
}
const taskList = [
  {
    number: "Task #1",
    description: "Throw a piece of A4 Paper into the Bin.",
    url: "/tasks/1",
    startTime: new Date("March 23, 2020, 9:00 GMT"),
    endTime: addHours(new Date("March 23, 2020, 9:00 GMT"), 30)
  },
  {
    number: "Task #2",
    description: "Convert your bathroom into a nice venue.",
    url: "/tasks/2",
    startTime: new Date("March 25, 2020, 9:00 GMT"),
    endTime: addHours(new Date("March 25, 2020, 9:00 GMT"), 30)
  },
  {
    number: "Task #3",
    description: "Make the best dancing elephant.",
    url: "/tasks/3",
    startTime: new Date("March 27, 2020, 9:00 GMT"),
    endTime: addHours(new Date("March 27, 2020, 15:00 GMT"), 30)
  },
  {
    number: "Task #4",
    description: "Camouflage yourself, and then reveal yourself.",
    url: "/tasks/4",
    startTime: new Date("March 30, 2020, 9:00 GMT"),
    endTime: addHours(new Date("March 30, 2020, 15:00 GMT"), 30)
  },
  {
    number: "Task #5",
    description: "Create an epic moment of sporting glory in your kitchen.",
    url: "/tasks/5",
    startTime: new Date("April 1, 2020, 9:00 GMT+1"),
    endTime: addHours(new Date("April 1, 2020, 15:00 GMT+1"), 30)
  }
];
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
          {taskList.map((task: TaskSummary) => (
            <StyledTaskListLi key={task.url}>
              <a href={task.url}>
                {task.number}: {task.description}
              </a>
            </StyledTaskListLi>
          ))}
        </StyledTaskList>
      </StyledTaskListFlex>
    </div>
  );
};

export default TaskList;
