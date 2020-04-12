import React, { useEffect } from "react";
import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import TaskEntryPage from "../../components/TaskEntryPage";
import TaskNav from "../../components/Tasks/TaskNav";
import FullWidthHR from "../../components/styled/FullWidthHR";
import tasksDb from "../../db/Tasks";
import { Task } from "../../components/Tasks/data";
import omit from "lodash/omit";

const Tasks: NextPage<{
  taskData: Task;
  taskDescriptions: Array<{ id: number; description: string }>;
}> = ({ taskData, taskDescriptions }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <TaskNav taskDescriptions={taskDescriptions} />
      <FullWidthHR />
      <TaskEntryPage id={parseInt(id as string, 10)} taskData={taskData} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const id: number = parseInt(context.params.id as string, 10);
  const { getTaskById, getAllTaskDescriptions } = tasksDb("tasks");
  const taskDataDb = await getTaskById(id);
  if (!taskDataDb || !taskDataDb._id) {
    context.res.writeHead(301, { Location: "no-task-yet" });
    context.res.end();
  }
  const taskDescriptions = await getAllTaskDescriptions();
  return {
    props: {
      taskData: { ...omit(taskDataDb, ["_id"]) } || {},
      taskDescriptions
    }
  };
};

export default Tasks;
