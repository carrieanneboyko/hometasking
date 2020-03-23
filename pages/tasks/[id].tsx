import React from "react";
import TimeStartsNow from "../../components/TimeStartsNow";
import { useRouter } from "next/router";
import NoTaskYet from "./no-task-yet";

const SwitchTasks: React.FC<{ id: any }> = ({ id }) => {
  const parsedId = parseInt(id, 10);
  switch (parsedId) {
    case NaN:
    default:
      return <NoTaskYet id={id} />;
  }
};

const Tasks: React.FC<{}> = () => {
  const router = useRouter();
  const { id } = router.query;
  return <SwitchTasks id={id} />;
};

export default Tasks;
