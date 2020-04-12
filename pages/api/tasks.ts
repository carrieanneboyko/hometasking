import Tasks from "../../db/Tasks";

export const tasksApi = (database: string, collection: string) => {
  const handleGet = async (req, res) => {
    const { getTaskById } = Tasks(database, collection);
    const id = parseInt(req.query.id, 10);
    try {
      const data = await getTaskById(id);
      return res.status(200).json(data);
    } catch (err) {
      return res
        .status(500)
        .json({ status: 500, message: "internal server error", err });
    }
  };

  const handlePost = async (req, res) => {
    const { addTask } = Tasks(database, collection);
    try {
      const data = await addTask(req.body);
      return res.status(200).json(data);
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: 500, message: "internal server error", err });
    }
  };

  return (req, res) => {
    switch (req.method.toUpperCase()) {
      case "GET":
        return handleGet(req, res);
      case "POST":
        return handlePost(req, res);
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  };
};

export default tasksApi("hometasking", "tasks");
