export type TaskPoints = Record<string, number>;

export type AllPoints = Record<string, TaskPoints>;

export const task1Points: TaskPoints = {
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
};

export const task2Points: TaskPoints = {
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
};
const totalPoints: AllPoints = { task1Points, task2Points };

export default totalPoints;
