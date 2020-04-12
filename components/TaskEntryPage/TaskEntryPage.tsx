import React from "react";
import TaskTemplate from "../Tasks/TaskTemplate";
import TaskNav from "../Tasks/TaskNav";
import FullWidthHR from "../styled/FullWidthHR";
import taskList from "../Tasks/data/index";

export const TaskEntryPage: React.FC<{ id: number }> = ({ id }) => {
  const taskIndex = id - 1;
  return (
    <div>
      <TaskNav />
      <FullWidthHR />
      <TaskTemplate task={taskList[taskIndex]} index={taskIndex} />;
    </div>
  );
};

export default TaskEntryPage;
