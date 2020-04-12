import addHours from "date-fns/addHours";

export type TaskPoints = Record<string, number>;

export type AllPoints = Record<string, TaskPoints>;

export interface Task {
  id: number;
  number: string;
  description: string;
  url: string;
  startTime: Date;
  endTime: Date;
  announcement: string;
  results?: string;
  fullTask: string[];
  points?: Record<string, number>;
}

export const taskList: Task[] = [
  {
    id: 1,
    number: "Task #1",
    description: "Throw a piece of A4 paper into a bin.",
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
  },
  {
    id: 2,
    number: "Task #2",
    description: "Convert your bathroom into a nice venue.",
    url: "/tasks/2",
    startTime: new Date("March 25, 2020, 9:00 GMT"),
    endTime: addHours(new Date("March 25, 2020, 9:00 GMT"), 30),
    announcement: `BBWmRvIT0QY`,
    results: `7tKIKdHB06k`,
    fullTask: [
      `Turn your bathroom into the sort of venue you might visit for a greatnight out.`,
      `Best bathroom conversion wins.`,
      `You have 30 hours.`,
      `Your time starts now.`
    ],
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
  },
  {
    id: 3,
    number: "Task #3",
    description: "Make the best dancing elephant.",
    url: "/tasks/3",
    startTime: new Date("March 27, 2020, 9:00 GMT"),
    endTime: addHours(new Date("March 27, 2020, 15:00 GMT"), 30),
    points: {
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
    },
    announcement: `xvuLmf9QPS0`,
    results: `v8y_tXnuCCw`,
    fullTask: [
      `Make the best dancing elephant.`,
      `You have six hours`,
      `Your time starts now`
    ]
  },
  {
    id: 4,
    number: "Task #4",
    description: "Camouflage yourself, and then reveal yourself.",
    url: "/tasks/4",
    startTime: new Date("March 30, 2020, 9:00 GMT"),
    endTime: addHours(new Date("March 30, 2020, 15:00 GMT"), 30),
    points: {
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
    },
    announcement: `xnfSBFM3mvs`,
    results: `zB7eDHrf9hg`,
    fullTask: [
      `Camouflage yourself, and then reveal yourself.`,
      `Please don't misinterpret "reveal yourself"`,
      `Best camouflage wins.`,
      `You have thirty hours`,
      `Your time starts now`
    ]
  },
  {
    id: 5,
    number: "Task #5",
    description: "Create an epic moment of sporting glory in your kitchen.",
    url: "/tasks/5",
    startTime: new Date("April 1, 2020, 9:00 GMT+1"),
    endTime: addHours(new Date("April 1, 2020, 15:00 GMT+1"), 30),
    points: {
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
    },
    announcement: `F7dZH5aSKr0`,
    results: `pfR6cOTMM-o`,
    fullTask: [
      `Turn your kitchen into a sporting arena,`,
      `and create the most epic moment of sporting glory,`,
      `in the kitchen.`,

      `You have thirty hours`,
      `Your time starts now`
    ]
  },
  {
    id: 6,
    number: "Task #6",
    description: "Do the most extraordinary thing with a pair of trousers.",
    url: "/tasks/6",
    startTime: new Date("April 6, 2020, 9:00 GMT+1"),
    endTime: addHours(new Date("April 6, 2020, 15:00 GMT+1"), 30),
    announcement: `F7dZH5aSKr0`,
    fullTask: [
      `Do something extraordinary with a pair of trousers.`,
      `Most extraordinary thing done with a pair of trousers wins.`,
      `You have thirty hours.`,
      `Your time starts now.`
    ],
    results: `ZcUP8jNBRRM`,
    points: {
      "@MrsWillisY3": 1,
      "@jamdow71": 2,
      "@theadamwalton": 3,
      "@santry79": 4,
      "@sandyharlel": 5,
      "@makerofcarts": 6,
      "@ben_mccluskey": 7,
      "@Louisa_Wenham": 8,
      "@103Trains": 9,
      "@ryan_will_jack": 10
    }
  },
  {
    id: 7,
    number: "Task #7",
    description: "Silently recreate an iconic movie moment.",
    url: "/tasks/7",
    startTime: new Date("April 8, 2020, 9:00 GMT+1"),
    endTime: addHours(new Date("April 8, 2020, 15:00 GMT+1"), 30),
    announcement: `osC8y0PBgUM`,
    fullTask: [
      `Silently recreate an iconic movie moment.`,
      `You may NOT use stop motion or computer animation.`,
      `Most ambitious, and enjoyable, silent,`,
      `recognisable movie-moment re-enactment wins.`,
      `You have thirty hours`,
      `Your time starts now`
    ]
    // results: `ZcUP8jNBRRM`,
    // points: {
    //   "@MrsWillisY3": 1,
    //   "@jamdow71": 2,
    //   "@theadamwalton": 3,
    //   "@santry79": 4,
    //   "@sandyharlel": 5,
    //   "@makerofcarts": 6,
    //   "@ben_mccluskey": 7,
    //   "@Louisa_Wenham": 8,
    //   "@103Trains": 9,
    //   "@ryan_will_jack": 10
    // },
  }
];

export default taskList;
