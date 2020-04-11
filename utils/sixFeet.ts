const sixFeetArray: string[] = [
  `26 apples`,
  `roughly two goats end-to-end, or four goats side-by-side`,
  `about 3.97 baby rhinoceri`,
  `two golden retrievers standing nose to tail`,
  `a man wearing a top hat`,
  `the width of an average sedan (North America) or the length of one (Europe)`,
  `0.8 times the width of those plastic sofas at the bowling alley`,
  `the size of a moose's antlers`,
  `2.3 adult cats (stretched)`,
  `one Richard Osman`
]

const sixFeet = (): string => {
  return sixFeetArray[Math.floor(Math.random() * sixFeetArray.length)];
}

export default sixFeet;