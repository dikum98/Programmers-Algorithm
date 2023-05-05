// 프로그래머스 Lv0 - 제곱수 판별하기

function solution(n) {
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (i * i === n) return 1;
  }

  return 2;
}
