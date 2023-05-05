// 프로그래머스 Lv0 - 짝수의 합

function solution(n) {
  let sumOfEvenUnderN = 0;

  for (let i = 0; i <= n; i += 2) sumOfEvenUnderN += i;

  return sumOfEvenUnderN;
}
