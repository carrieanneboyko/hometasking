import { MongoClient } from "mongodb";

const URL = process.env.MONGODB_URI;

const connect = (): Promise<MongoClient> =>
  new Promise((resolve, reject) => {
    console.log("URL!", URL);
    MongoClient.connect(URL, (err, db: MongoClient) => {
      if (err) {
        reject(err);
      }
      resolve(db);
    });
  });

export default connect;
