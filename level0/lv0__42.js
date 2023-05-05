// 프로그래머스 Lv0 - n의 배수 고르기

function solution(n, numlist) {
  return numlist.filter((num) => !(num % n));
}
