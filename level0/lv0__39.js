// 프로그래머스 Lv0 - 개미 군단

function solution(hp) {
  let antCount = Math.floor(hp / 5);
  hp %= 5;
  antCount += Math.floor(hp / 3);
  hp %= 3;
  antCount += hp / 1;

  return antCount;
}
