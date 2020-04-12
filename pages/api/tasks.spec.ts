import axios from "axios";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { tasksApi } from "./tasks";
import { addHours } from "date-fns";

let app;
let server;

const rando = Math.ceil(Math.random() * 1000) + 500;

const testTask = {
  id: rando,
  number: "Task #1",
  description: "Throw a piece of A4 Paper into the Bin.",
  url: "/tasks/1",
  startTime: new Date("March 23, 2020, 9:00 GMT"),
  endTime: addHours(new Date("March 23, 2020, 9:00 GMT"), 30),
  announcement: `7tJCKtyz47E`,
  results: `z0-C5GH_yxU`,
  fullTask: [
    `Throw a piece of A4 paper into a bin.`,
    `Most spectacular throw wins.`,
    `One entry per household.`,
    `You have 30 hours.`,
    `Your time starts now.`
  ],
  points: {
    "@stephkle": 1,
    "@tylernilson8": 2,
    "@Chipfork42": 3,
    "@EquiumFox": 4,
    "@NayGHutch": 5,
    "@CrispyMcHenry": 6,
    "@MeistersTask": 7,
    "@SanneSofieee": 8,
    "@BenBackflip": 9,
    "@OldmanPlar": 10
  }
};

describe("tests api", () => {
  beforeAll(done => {
    app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use("/api/tasks", tasksApi("hometasking-test", "tasks"));
    server = app.listen(4000, () => {
      console.log("test server is running on port 4000");
      done();
    });
  });
  afterAll(done => {
    server.close(() => {
      console.log("closing test server");
      done();
    });
  });
  describe("POST /api/tasks/", () => {
    it("posts a task", async () => {
      const { data } = await axios.post(
        "http://localhost:4000/api/tasks/",
        testTask
      );
      console.log("data", data);
      expect(data).toEqual({
        ...testTask,
        _id: data._id,
        startTime: testTask.startTime.toISOString(),
        endTime: testTask.endTime.toISOString()
      });
    });
  });
  describe("GET /api/tasks/", () => {
    it("posts a task", async () => {
      const { data } = await axios.get(
        `http://localhost:4000/api/tasks/?id=${rando}`
      );
      console.log("data", data);
      expect(data).toEqual({
        ...testTask,
        _id: data._id,
        startTime: testTask.startTime.toISOString(),
        endTime: testTask.endTime.toISOString()
      });
    });
  });
});
