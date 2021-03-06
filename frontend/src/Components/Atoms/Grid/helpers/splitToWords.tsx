/*
  Regex to split e.g. "10px repeat(2, 1fr) 0.4em 10px" to array of strings: ["10px", "repeat(2, 1fr)", "0.4em", "10px"]
 */

const splitToWords: GridSplitToWords = value =>
  value
    ? value.match(
        /\d+\.\d+\w+|\w+\((\w+\([^\\(]+\)|[,]|\s+|\d+|\w+(-?\w?)|\d+\.\d+\w+|\d+([\w]+|%))*\)|\w+\([^\\(]+\)|\d+([\w]+|%)|[\w\\-]+/g,
      )
    : undefined;

export default splitToWords;
