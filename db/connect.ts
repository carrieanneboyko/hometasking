import { MongoClient } from "mongodb";

const URL = process.env.MONGOLAB_URI;
const DB_NAME = process.env.DB_NAME;

const connect = (): Promise<any> =>
  new Promise((resolve, reject) => {
    MongoClient.connect(URL, (err, client: MongoClient) => {
      if (err) {
        reject(err);
      }
      resolve({ dbClose: () => client.close(), db: client.db(DB_NAME) });
    });
  });

export default connect;
