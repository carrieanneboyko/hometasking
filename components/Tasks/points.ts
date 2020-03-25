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
const totalPoints: AllPoints = { task1Points };

export default totalPoints;
