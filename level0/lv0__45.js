// 프로그래머스 Lv0 - 직각삼각형 출력하기

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  for (let i = 1; i <= input; i++) {
    console.log("*".repeat(i));
  }
});
