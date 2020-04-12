import { MongoClient } from "mongodb";

const URL = process.env.MONGODB_URI
  ? `${process.env.MONGODB_URI}`
  : "mongodb://localhost:27017/";
console.log({ URL });

const connect = (): Promise<MongoClient> =>
  new Promise((resolve, reject) => {
    MongoClient.connect(URL, (err, db: MongoClient) => {
      if (err) {
        reject(err);
      }
      resolve(db);
    });
  });

export default connect;
