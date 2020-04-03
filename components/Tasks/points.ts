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

export const task3Points: TaskPoints = {
  "@monkey10is": 1,
  "@LoisShenton": 2,
  "@Paco2351694390": 3,
  "@steviebay1": 4,
  "@BenBackflip": 5,
  "@Flickarounie": 6,
  "@Necromaticon": 7,
  "@DonJuanelly": 8,
  "@colcolgan": 9,
  "@MuffettsM": 10
};

export const task4Points: TaskPoints = {
  "@GosdaTM": 1,
  "@LucasSayers1": 2,
  "@pelasun": 3,
  "@clareymarey": 4,
  "@Itzsaranewton": 5,
  "@katewatson3231": 6,
  "@LisaWoo89422": 7,
  "@TaskmasterMad": 8,
  "@MattyBoydMTB": 9,
  "@lexy_simpson": 10
};

export const task5Points: TaskPoints = {
  "@lilyloutasks": 1,
  "@BenBackflip": 2,
  "@AdyMirf": 3,
  "@crispykirman": 4,
  "@Benjisteele93": 5,
  "@Amabel_Ivy": 6,
  "@4thehometasking": 7,
  "@DuffellDaniel": 8,
  "@TomCable1": 9,
  "@C_Johnson1286": 10
};
const totalPoints: AllPoints = { task1Points, task2Points, task3Points, task4Points, task5Points };

export default totalPoints;
