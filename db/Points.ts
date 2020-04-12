import connect from "./connect";

const Points = (providedDbName: string, collection: string) => {
  const dbName: string =
    process.env.NODE_ENV === "production"
      ? process.env.DB_NAME
      : providedDbName;
  const getAllPoints = async () => {
    const db = await connect();
    const cursor = db.db(dbName).collection(collection);
    const res = await cursor.find({}).project({ points: 1 }).toArray();
    db.close();
    return res
      .map(entry => entry.points)
      .reduce((pointList, currentPoints) => {
        Object.entries(currentPoints).forEach(([winner, taskPoints]) => {
          if (!pointList[winner]) {
            pointList[winner] = 0;
          }
          pointList[winner] += taskPoints;
        });
        return pointList;
      }, {});
  };

  return { getAllPoints };
};

export default Points;
