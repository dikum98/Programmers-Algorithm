// 프로그래머스 Level0 - 영어가 싫어요

const solution = (number) => {
  const separators = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let temp = "";
  let answer = "";

  for (const c of number) {
    temp += c;
    if (separators.includes(temp)) {
      answer += separators.indexOf(temp);
      temp = "";
    }
  }

  return +answer;
};

const solution2 = (number) => {
  const separators = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < separators.length; i++) {
    number = number.split(separators[i]).join(i);
  }

  return +number;
};
