import connect from "./connect";

const Points = (collection: string) => {
  const getAllPoints = async () => {
    const { db, dbClose } = await connect();
    const cursor = db.collection(collection);
    const res = await cursor.find({}).project({ points: 1 }).toArray();
    dbClose();
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
