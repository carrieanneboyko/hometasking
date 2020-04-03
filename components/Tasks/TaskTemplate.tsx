import React, { Fragment } from "react";

import { Task } from "./data/index";

import styled from "styled-components";
import CovidDos from "../CovidDos";
import VideoHolder from "../VideoHolder";
import Timer from "../Timer";
import FullWidthHR from "../styled/FullWidthHR";

const MainStyle = styled.div`
  font-family: "Special Elite", Courier New, Courier, monospace;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskmasterH1 = styled.h1`
  font-family: "Special Elite";
`;

const TaskmasterTask = styled.div`
  font-family: "Special Elite";
  max-width: 600px;
  margin: 10px;
  border: 1px dotted grey;
  padding: 20px;
  text-align: center;
`;
const TaskmasterAddendum = styled.div`
  font-family: "Special Elite";
`;

const StyledPointsList = styled.div`
  padding: 10px;
`;
const StyledSeal = styled.span`
  padding: 5px;
  margin: 5px;
  border-radius: 50%;
  color: white;

  background-color: red;
`;

const TaskTemplate: React.FC<{ task: Task; index: number }> = ({ task, index }) => {
  return (
    <MainStyle>
      <TaskmasterH1>{`Task #${index + 1}`}</TaskmasterH1>
      <FullWidthHR />
      <VideoHolder
        src={`https://www.youtube.com/embed/${task.announcement}`}
        isTaskmaster={true}
      ></VideoHolder>
      <TaskmasterTask>
        {task.fullTask.map((taskLine: string) => (
          <p key={taskLine}>{taskLine}</p>
        ))}
        <FullWidthHR />
      </TaskmasterTask>
      <Timer startTime={task.startTime} endTime={task.endTime} />

      <TaskmasterAddendum>
        <p>
          All tasks must be uploaded to Twitter with the hashtag "#HomeTasking"
          to be considered.
        </p>
        <p>Please keep your clip under 20 seconds long.</p>
        <p>
          Please film landscape mode/horizontal not portrait mode/vertical, if
          you are able.
        </p>

        <p>The Taskmaster's decision is final.</p>
      </TaskmasterAddendum>
      <FullWidthHR />
      {task.results && task.points ? (
        <Fragment>
          <TaskmasterH1>Results</TaskmasterH1>
          <VideoHolder
            src={`https://www.youtube.com/embed/${task.results}`}
            isTaskmaster={true}
          ></VideoHolder>
          <TaskmasterTask>
            <p>{`Task #${index + 1} Points`}</p>
            {Object.entries(task.points)
              .sort(([_nameA, pointsA], [_nameB, pointsB]) => pointsA - pointsB)
              .map(([name, points]) => (
                <StyledPointsList>
                  {`${name}: `}
                  <StyledSeal>{points}</StyledSeal>
                </StyledPointsList>
              ))}
          </TaskmasterTask>
          <FullWidthHR />{" "}
        </Fragment>
      ) : null}
      <CovidDos />
      <FullWidthHR />
    </MainStyle>
  );
};

export default TaskTemplate;
