import connect from "./connect";
import { Task } from "../components/Tasks/data";

const Tasks = (dbName: string, collection: string) => {
  const getTaskById = async (taskId: number) => {
    const db = await connect();
    const cursor = db.db(dbName).collection(collection);
    const res = await cursor.findOne({ id: taskId });
    db.close();
    return res;
  };

  const addTask = async (taskInfo: Partial<Task>) => {
    const db = await connect();
    const cursor = db.db(dbName).collection(collection);
    const res = await cursor.findOneAndUpdate(
      { id: taskInfo.id },
      { $set: taskInfo },
      {
        upsert: true,
        returnOriginal: false
      }
    );
    db.close();
    if (res.ok !== 1) {
      throw new Error(JSON.stringify(res));
    }
    return res.value;
  };
  return { getTaskById, addTask };
};

export default Tasks;
