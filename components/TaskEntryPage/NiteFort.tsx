import React, { Fragment } from "react";
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

const TaskmasterH3 = styled.h3`
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

const NiteFort: React.FC<{}> = () => {
  const task = {
    fullTask: [
      `Construct the best fort`,
      `and spend the night in it.`,
      `You must not use your bed in the construction of your fort.`,
      `Best fort wins.`,
      `You have thirty (30) days.`,
      `Your time starts now.`,
    ],
  };
  return (
    <MainStyle>
      <TaskmasterH1>{`Task #nitefort`}</TaskmasterH1>
      <TaskmasterH3>
        Helping{" "}
        <a href="https://sloughhomeless.org.uk/">Slough Homeless Our Concern</a>
      </TaskmasterH3>
      <TaskmasterH1>
        <a href="https://www.justgiving.com/campaign/Nitefort?mc_cid=d37286f5e0">
          Donate to SHOC
        </a>
      </TaskmasterH1>
      <FullWidthHR />
      <VideoHolder
        src={`https://www.youtube.com/embed/S4JY6yzOPuY`}
        isTaskmaster={true}
      ></VideoHolder>
      <TaskmasterTask>
        <p>
          <a href="https://www.justgiving.com/campaign/Nitefort?mc_cid=d37286f5e0">
            Donate some money if you can afford it to SHOC, then:
          </a>
        </p>
        {task.fullTask.map((taskLine: string) => (
          <p key={taskLine}>{taskLine}</p>
        ))}
        <FullWidthHR />
      </TaskmasterTask>
      <Timer
        startTime={
          new Date("Fri May 01 2020 09:00:00 GMT+0100 (British Summer Time)")
        }
        endTime={
          new Date("Fri May 31 2020 09:00:00 GMT+0100 (British Summer Time)")
        }
      />

      <TaskmasterAddendum>
        <p>
          This task must be completed by adding the hashtag #nitefort to
          Twitter.
        </p>
        <p>Please keep your clip under 20 seconds long.</p>
        <p>
          Please film landscape mode/horizontal not portrait mode/vertical, if
          you are able.
        </p>

        <p>The Taskmaster's decision is final.</p>
      </TaskmasterAddendum>
      <FullWidthHR />
      {/* {task.results && task.points ? (
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
                <StyledPointsList key={name}>
                  {`${name}: `}
                  <StyledSeal>{points}</StyledSeal>
                </StyledPointsList>
              ))}
          </TaskmasterTask>
          <FullWidthHR />{" "}
        </Fragment>
      ) : null} */}
      <CovidDos />
      <FullWidthHR />
    </MainStyle>
  );
};

export default NiteFort;
