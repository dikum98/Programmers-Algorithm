// 프로그래머스 Lv0 - 짝수는 싫어요

function solution(n) {
  return Array(Math.ceil(n / 2))
    .fill(0)
    .map((num, i) => i * 2 + 1);
}
