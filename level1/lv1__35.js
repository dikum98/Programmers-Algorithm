// 프로그래머스 lv1 - 콜라 문제

function solution(a, b, n) {
  let count = 0;

  while (n >= a) {
    const share = Math.floor(n / a);

    count += share * b;
    n = share * b + (n - share * a);
  }
  return count;
}
