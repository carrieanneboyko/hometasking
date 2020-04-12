import connect from "./connect";
import { Task } from "../components/Tasks/data";
import pick from "lodash/pick";

const Tasks = (collection: string) => {
  const getTaskById = async (taskId: number) => {
    const { db, dbClose } = await connect();

    const cursor = db.collection(collection);
    const res = await cursor.findOne({ id: taskId });
    dbClose();
    return res;
  };
  const getAllTaskDescriptions = async () => {
    const { db, dbClose } = await connect();

    const cursor = db.collection(collection);
    const res = await cursor
      .find({})
      .project({ description: 1, id: 1 })
      .toArray();
    dbClose();
    return res.map(entry => pick(entry, ["id", "description"]));
  };
  const addTask = async (taskInfo: Partial<Task>) => {
    const { db, dbClose } = await connect();
    const cursor = db.collection(collection);
    const res = await cursor.findOneAndUpdate(
      { id: taskInfo.id },
      { $set: taskInfo },
      {
        upsert: true,
        returnOriginal: false
      }
    );
    dbClose();
    if (res.ok !== 1) {
      throw new Error(JSON.stringify(res));
    }
    return res.value;
  };
  return { getTaskById, addTask, getAllTaskDescriptions };
};

export default Tasks;
