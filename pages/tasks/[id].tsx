import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import NoTaskYet from "./no-task-yet";
import Task1 from "../../components/Tasks/Task1";
import Task2 from "../../components/Tasks/Task2";
import Task3 from "../../components/Tasks/Task3";

import TaskNav from '../../components/Tasks/TaskNav';
import FullWidthHR from '../../components/styled/FullWidthHR';
import fetch from "isomorphic-unfetch";

const SwitchTasks: React.FC<{ id: any; entries?: any }> = ({ id, entries }) => {
  const parsedId = parseInt(id, 10);
  switch (parsedId) {
    case 1:
      return <Task1 entries={entries} />;
    case 2:
      return <Task2 entries={entries} />;
    case 3: 
      return <Task3 entries={entries} />
    case NaN:
    default:
      return <NoTaskYet id={id} />;
  }
};

const Tasks: NextPage<{ entries?: any }> = ({ entries }) => {
  const router = useRouter();
  const { id } = router.query;
  return  <div>
    <TaskNav/>
    <FullWidthHR/>
    <SwitchTasks id={id} entries={entries} />;
  </div>
};

Tasks.getInitialProps = async function() {
  try {
    const res = await fetch(
      "https://api.twitter.com/1.1/search/tweets.json?q=%23hometasking",
      {
        method: "get",
        headers: {
          authorization: `OAuth oauth_consumer_key="${process.env.TWITTER_API_KEY}", oauth_token="${process.env.TWITTER_TOKEN}"`
        }
      }
    );
    const data = await res.json();
    return {
      entries: { tweets: data }
    };
  } catch (err) {
    console.error(err);
    return { entries: { tweets: err } };
  }
};

export default Tasks;
