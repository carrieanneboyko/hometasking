import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import NoTaskYet from "./no-task-yet";
import TaskTemplate from "../../components/Tasks/TaskTemplate";
import TaskNav from "../../components/Tasks/TaskNav";
import FullWidthHR from "../../components/styled/FullWidthHR";
import taskList from "../../components/Tasks/data/index";

const Tasks: NextPage<{ entries?: any }> = ({ entries }) => {
  const router = useRouter();
  const { id } = router.query;
  const taskIndex = parseInt(id as string, 10) - 1;
  return (
    <div>
      <TaskNav />
      <FullWidthHR />
      <TaskTemplate task={taskList[taskIndex]} index={taskIndex} />;
    </div>
  );
};

export default Tasks;
