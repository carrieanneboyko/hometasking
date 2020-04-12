import React, { useState, useReducer, useEffect } from "react";
import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Tasks from "../../../db/Tasks";
import { Task } from "../../../components/Tasks/data";
import styled from "styled-components";
import FullWidthHR from "../../../components/styled/FullWidthHR";
import TaskTemplate from "../../../components/Tasks/TaskTemplate";
import axios from "axios";
import omit from "lodash/omit";
import differenceInMilliseconds from "date-fns/differenceInMilliseconds";
import {
  useAuth0,
  requireUser
} from "../../../components/Auth0HOC/Auth0Provider";

const MS_IN_HOUR = 60 * 60 * 1000;

type Points = Array<{ name: string; points: number }>;
interface PointsAction {
  type: string;
  index?: number;
  name?: string;
  points?: number;
}
interface TimeAction {
  type: string;
  year?: number;
  month?: number;
  date?: number;
  hour?: number;
  minute?: number;
  timeZone?: string;
}

const TaskmasterStyledDiv = styled.div`
  font-family: "Special Elite", Courier New, Courier, Mono;
`;

const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
`;

const PointsGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 100px;
`;

const findDefaultHours = ({ startTime, endTime }: Partial<Task>): number => {
  if (startTime && endTime) {
    return Math.floor(
      differenceInMilliseconds(new Date(endTime), new Date(startTime)) /
        MS_IN_HOUR
    );
  }
  return 30;
};

const pointsReducer = (state: Points, action: PointsAction) => {
  switch (action.type) {
    case "ADD_SCORE":
      return state.concat({ name: "", points: 0 });
    case "DELETE_SCORE":
      return state.slice(0, action.index).concat(state.slice(action.index + 1));
    case "EDIT_SCORE_NAME": {
      return state
        .slice(0, action.index)
        .concat({ ...state[action.index], name: action.name })
        .concat(state.slice(action.index + 1));
    }
    case "EDIT_SCORE_POINTS": {
      return state
        .slice(0, action.index)
        .concat({ ...state[action.index], points: action.points })
        .concat(state.slice(action.index + 1));
    }
    default:
      return state;
  }
};

const safeguardTime = (proxy: Date, state: Date): Date =>
  proxy instanceof Date && !isNaN(proxy.valueOf()) ? proxy : state;

const timeReducer = (state: Date, action: TimeAction) => {
  try {
    const proxy = new Date(state.getTime());
    switch (action.type) {
      case "year":
        proxy.setFullYear(action.year);
        return safeguardTime(proxy, state);
      case "month":
        proxy.setMonth(action.month - 1); // month array starts at 0. Idiotic Javascript choice.
        return safeguardTime(proxy, state);
      case "date":
        proxy.setDate(action.date);
        return safeguardTime(proxy, state);
      case "hour":
        proxy.setHours(action.hour);
        return safeguardTime(proxy, state);
      case "minute":
        proxy.setMinutes(action.minute);
        return safeguardTime(proxy, state);
      default:
        return state;
    }
  } catch (err) {
    console.error(err);
    return state;
  }
};

const EditTask: NextPage<{ taskData?: Partial<Task> }> = ({ taskData }) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const router = useRouter();
  const id = parseInt(router.query.id as string, 10);
  const [loadingStatus, setLoadingStatus] = useState<string>(
    taskData.id !== undefined ? "Retrieved from database" : "Initialised"
  );
  const [description, setDescription] = useState<string>(
    taskData.description || ""
  );
  const [startTime, dispatchStartTime] = useReducer(timeReducer, new Date());
  const [hours, setHours] = useState<number>(findDefaultHours(taskData));
  const [announcement, setAnnouncement] = useState<string>(
    taskData.announcement || ""
  );
  const [results, setResults] = useState<string>(taskData.results || "");
  const [fullTask, setFullTask] = useState<string>(
    taskData.fullTask ? taskData.fullTask.join(`\n`) : ""
  );
  const [points, dispatchPoints] = useReducer(
    pointsReducer,
    taskData.points
      ? Object.entries(taskData.points).map(
          ([name, pts]: [string, number]) => ({
            name,
            points: pts
          })
        )
      : []
  );

  const editTime = (type: string) => (
    ev: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatchStartTime({ type, [type]: ev.target.value });
  };

  const addScore = () => {
    dispatchPoints({ type: "ADD_SCORE" });
  };
  const deleteScore = (index: number) => (): void => {
    dispatchPoints({ type: "DELETE_SCORE", index });
  };

  const editPointsName = (index: number) => (
    ev: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatchPoints({ type: "EDIT_SCORE_NAME", index, name: ev.target.value });
  };
  const editPointsScore = (index: number) => (
    ev: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatchPoints({
      type: "EDIT_SCORE_POINTS",
      points: parseInt(ev.target.value, 10),
      index
    });
  };
  const editDescription = (ev: React.ChangeEvent<HTMLInputElement>): void =>
    setDescription(ev.target.value);
  const editFullTask = (ev: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setFullTask(ev.target.value);
  };
  const editAnnouncement = (ev: React.ChangeEvent<HTMLInputElement>): void =>
    setAnnouncement(ev.target.value);
  const editResults = (ev: React.ChangeEvent<HTMLInputElement>): void =>
    setResults(ev.target.value);
  const editHours = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    const val = parseInt(ev.target.value, 10);
    if (!isNaN(val)) {
      setHours(val);
    }
  };

  const workingData = {
    id,
    number: `Task #${id}`,
    description,
    url: `/tasks/${id}`,
    startTime,
    endTime: new Date(startTime.getTime() + hours * 60 * 60 * 1000),
    announcement,
    results,
    fullTask: fullTask.split("\n"),
    points: points.reduce((pv: Record<string, number>, cv: any) => {
      return { ...pv, [cv.name]: cv.points };
    }, {} as Record<string, number>)
  };
  const sendDataToBackend = async () => {
    setLoadingStatus("loading");
    try {
      const res = await axios.post("/api/tasks", workingData);
      console.log("res", { res });
      setLoadingStatus(`saved at ${new Date().toLocaleString()}`);
    } catch (err) {
      console.error(err);
      setLoadingStatus(`error: ${err}`);
    }
  };

  return (
    <div>
      <h2>{loadingStatus}</h2>
      <h4>Welcome {user && user.nickname}</h4>
      <div>Forgive the unpolished nature of the backend</div>
      <div>Not a lot of time to do validation or verification</div>
      <pre>{JSON.stringify(taskData, null, 2)}</pre>
      <FullWidthHR />
      <div>Editing Task #{id}</div>
      <FullWidthHR />
      <h1>Before the results come in: </h1>

      <div>
        <label>
          Short Description (Home Page):
          <div>
            <input
              type="text"
              name="description"
              value={description}
              onChange={editDescription}
            />
          </div>
        </label>
        <TaskmasterStyledDiv>{description}</TaskmasterStyledDiv>
      </div>
      <FullWidthHR />

      <div>
        <label>
          Announcement video: We just need the ID string: for example,{" "}
          <a href="https://www.youtube.com/watch?v=7tJCKtyz47E">
            "https://www.youtube.com/watch?v=7tJCKtyz47E"
          </a>{" "}
          should be listed as "7tJCKtyz47E"
          <div>
            <input
              type="text"
              name="announcement"
              value={announcement}
              onChange={editAnnouncement}
            />
          </div>
        </label>
        <div>
          <a
            href={`https://www.youtube.com/watch?v=${announcement}`}
          >{`https://www.youtube.com/watch?v=${announcement}`}</a>
        </div>
      </div>
      <FullWidthHR />

      <div>
        <label>
          Full Task. (Hit enter at the end of each line.)
          <div>
            <textarea
              value={fullTask}
              onChange={editFullTask}
              cols={100}
              rows={7}
            />
          </div>
        </label>
        <div>
          {fullTask.split("\n").map(line => (
            <TaskmasterStyledDiv>{line}</TaskmasterStyledDiv>
          ))}
        </div>
      </div>
      <FullWidthHR />

      <div>
        <label>
          Start Time:
          <div>Sorry, I'll get a better date-time picker soon.</div>
          <TimeGrid>
            <div>Year</div>
            <div>
              <input
                onChange={editTime("year")}
                value={startTime.getFullYear()}
              />
            </div>
          </TimeGrid>
          <TimeGrid>
            <div>Month</div>
            <div>
              <input
                onChange={editTime("month")}
                value={startTime.getMonth() + 1}
              />
            </div>
          </TimeGrid>
          <TimeGrid>
            <div>Date</div>
            <div>
              <input onChange={editTime("date")} value={startTime.getDate()} />
            </div>
          </TimeGrid>
          <TimeGrid>
            <div>hour</div>
            <div>
              <input onChange={editTime("hour")} value={startTime.getHours()} />
            </div>
          </TimeGrid>
          <TimeGrid>
            <div>minutes</div>
            <div>
              <input
                onChange={editTime("minute")}
                value={startTime.getMinutes()}
              />
            </div>
          </TimeGrid>
        </label>
        <div> {startTime.toString()}</div>
      </div>
      <FullWidthHR />

      <div>
        <label>
          <div>Hours for the task:</div>
          <div>
            <input
              type="text"
              name="description"
              value={hours}
              onChange={editHours}
            />
          </div>
        </label>
        <TaskmasterStyledDiv>{`You have ${hours} hours`}</TaskmasterStyledDiv>
      </div>
      <FullWidthHR />

      <FullWidthHR />
      <h1>After the results come in: </h1>
      <div>
        <label>
          <div>
            Results video: We just need the ID string: for example,{" "}
            <a href="https://www.youtube.com/watch?v=z0-C5GH_yxU">
              "https://www.youtube.com/watch?v=z0-C5GH_yxU"
            </a>{" "}
            should be listed as "z0-C5GH_yxU"
          </div>
          <div>
            The page will not show points or the results video if this field is
            blank
          </div>
          <div>
            <input
              type="text"
              name="results"
              value={results}
              onChange={editResults}
            />
          </div>
        </label>
        <div>
          <a
            href={`https://www.youtube.com/watch?v=${results}`}
          >{`https://www.youtube.com/watch?v=${results}`}</a>
        </div>
      </div>
      <FullWidthHR />

      <div>
        <h4>Points</h4>
        <button onClick={addScore}>Add Entry</button>
        {points.map(
          (element: { name: string; points: number }, index: number) => (
            <PointsGrid>
              <div>
                Name:{" "}
                <input value={element.name} onChange={editPointsName(index)} />
              </div>
              <div>
                Points:{" "}
                <input
                  value={element.points}
                  onChange={editPointsScore(index)}
                />
              </div>
              <div>
                <button onClick={deleteScore(index)}>DELETE</button>
              </div>
            </PointsGrid>
          )
        )}
      </div>
      <FullWidthHR />
      <button onClick={sendDataToBackend}>SAVE</button>
      <FullWidthHR />
      <h1>Preview:</h1>
      <TaskTemplate index={id - 1} task={workingData} />
      <FullWidthHR />

      <button onClick={sendDataToBackend}>SAVE</button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const id: number = parseInt(context.params.id as string, 10);
  const { getTaskById } = Tasks("tasks");
  const res = await getTaskById(id);
  return { props: { taskData: omit(res, ["_id"]) || {} } };
};

export default EditTask;
