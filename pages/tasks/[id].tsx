import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import NoTaskYet from "./no-task-yet";
import Task1 from "../../components/Tasks/Task1";
import Task2 from "../../components/Tasks/Task2";
import Task3 from "../../components/Tasks/Task3";
import Task4 from "../../components/Tasks/Task4";
import Task5 from "../../components/Tasks/Task5";

import TaskNav from "../../components/Tasks/TaskNav";
import FullWidthHR from "../../components/styled/FullWidthHR";

const TaskPage = {
  1: Task1,
  2: Task2,
  3: Task3,
  4: Task4,
  5: Task5
};
const SwitchTasks: React.FC<{ id: any; entries?: any }> = ({ id }) => {
  const parsedId = parseInt(id, 10);
  const ThisTask = TaskPage[parsedId];
  return ThisTask ? <ThisTask /> : <NoTaskYet id={id} />;
};

const Tasks: NextPage<{ entries?: any }> = ({ entries }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <TaskNav />
      <FullWidthHR />
      <SwitchTasks id={id} entries={entries} />;
    </div>
  );
};

export default Tasks;
