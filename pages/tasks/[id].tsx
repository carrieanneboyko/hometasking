import React from "react";
import TimeStartsNow from "../../components/TimeStartsNow";
import { useRouter } from "next/router";

const Tasks: React.FC<{}> = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <TimeStartsNow />
      <div>{id}</div>
    </div>
  );
};

export default Tasks;
