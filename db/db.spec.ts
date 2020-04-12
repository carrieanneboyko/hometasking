import connect from "./connect";
import Tasks from "./Tasks";
import Points from "./Points";
import { InsertOneWriteOpResult } from "mongodb";
import { addHours } from "date-fns";

const testTask = {
  id: 501,
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

const testTask2Before = {
  id: 502,
  number: "Task #2",
  description: "Convert your bathroom into a nice venue.",
  url: "/tasks/2",
  startTime: new Date("March 25, 2020, 9:00 GMT"),
  endTime: addHours(new Date("March 25, 2020, 9:00 GMT"), 30),
  announcement: `BBWmRvIT0QY`,
  fullTask: [
    `Turn your bathroom into the sort of venue you might visit for a greatnight out.`,
    `Best bathroom conversion wins.`,
    `You have 30 hours.`,
    `Your time starts now.`
  ]
};

const testTask2After = {
  id: 502,
  results: `7tKIKdHB06k`,
  points: {
    "@ashsollars": 1,
    "@max_thomas18": 2,
    "@aortakinda": 3,
    "@petermcnasty": 4,
    "@BenFerrariJ23": 5,
    "@Tee_207": 6,
    "@WaffelKopf": 7,
    "@JGregly": 8,
    "@DannyMunoir": 9,
    "@MikeWHolder": 10
  }
};

describe("Connection to DB test", () => {
  it("connects to db", async () => {
    const testObj = { test: "foo" };
    const db = await connect();
    try {
      const res: InsertOneWriteOpResult<any> = await db
        .db("hometasking")
        .collection("hometasking-test")
        .insertOne(testObj);
      const { insertedCount } = res;
      expect(insertedCount).toBe(1);
      db.close();
      return;
    } catch (err) {
      db.close();
      throw new Error(err);
    }
  });
});

let data: any = {};
describe("Tasks", () => {
  beforeAll(async () => {
    const db = await connect();
    try {
      await db.db("hometasking-test").collection("tasks-test").drop();
    } catch (err) {
      console.warn(err);
      return;
    }
  });
  it("adds a full task", async () => {
    const { addTask } = Tasks("tasks-test");
    const res = await addTask(testTask);
    const mongoId = res._id;
    expect(res).toEqual({ ...testTask, _id: mongoId });
  });
  it("adds a partial task, then completes", async () => {
    const { addTask } = Tasks("tasks-test");

    const res = await addTask(testTask2Before);
    const mongoId = res._id;
    expect(res).toEqual({ ...testTask2Before, _id: mongoId });
    const upd = await addTask(testTask2After);
    expect(upd).toEqual({
      ...testTask2Before,
      ...testTask2After,
      _id: mongoId
    });
  });
  it("retrieves a task by id", async () => {
    const { getTaskById } = Tasks("tasks-test");
    const res = await getTaskById(testTask.id);
    expect(res).toEqual({
      _id: res._id,
      announcement: "7tJCKtyz47E",
      description: "Throw a piece of A4 Paper into the Bin.",
      endTime: new Date(`2020-03-24T15:00:00.000Z`),
      fullTask: [
        "Throw a piece of A4 paper into a bin.",
        "Most spectacular throw wins.",
        "One entry per household.",
        "You have 30 hours.",
        "Your time starts now."
      ],
      id: 501,
      number: "Task #1",
      points: {
        "@BenBackflip": 9,
        "@Chipfork42": 3,
        "@CrispyMcHenry": 6,
        "@EquiumFox": 4,
        "@MeistersTask": 7,
        "@NayGHutch": 5,
        "@OldmanPlar": 10,
        "@SanneSofieee": 8,
        "@stephkle": 1,
        "@tylernilson8": 2
      },
      results: "z0-C5GH_yxU",
      startTime: new Date(`2020-03-23T09:00:00.000Z`),
      url: "/tasks/1"
    });
  });
});

describe("Poitns", () => {
  beforeAll(async () => {
    const db = await connect();
    try {
      await db.db("hometasking-test").collection("tasks-test").drop();
    } catch (err) {
      console.warn(err);
      return;
    }
  });
  it("getsAllPoints", async () => {
    const { addTask } = Tasks("tasks-test");
    await addTask(testTask);
    await addTask({ ...testTask2Before, ...testTask2After });
    const { getAllPoints } = Points("tasks-test");
    const res = await getAllPoints();
    expect(res).toEqual({
      "@stephkle": 1,
      "@tylernilson8": 2,
      "@Chipfork42": 3,
      "@EquiumFox": 4,
      "@NayGHutch": 5,
      "@CrispyMcHenry": 6,
      "@MeistersTask": 7,
      "@SanneSofieee": 8,
      "@BenBackflip": 9,
      "@OldmanPlar": 10,
      "@ashsollars": 1,
      "@max_thomas18": 2,
      "@aortakinda": 3,
      "@petermcnasty": 4,
      "@BenFerrariJ23": 5,
      "@Tee_207": 6,
      "@WaffelKopf": 7,
      "@JGregly": 8,
      "@DannyMunoir": 9,
      "@MikeWHolder": 10
    });
  });
});
