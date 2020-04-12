import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import TaskEntryPage from "../../components/TaskEntryPage";

const Tasks: NextPage<{}> = () => {
  const router = useRouter();
  const { id } = router.query;
  return <TaskEntryPage id={parseInt(id as string, 10)} />;
};

export default Tasks;
