// 프로그래머스 Level0 - 7의 개수

const solution = (array) =>
  array
    .join("")
    .split("")
    .filter((v) => v === "7").length;
