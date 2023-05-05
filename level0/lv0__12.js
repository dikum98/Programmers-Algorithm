// 프로그래머스 Lv0 - 양꼬치

function solution(n, k) {
  return n * 12000 + k * 2000 - Math.floor(n / 10) * 2000;
}
