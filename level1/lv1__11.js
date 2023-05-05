// 프로그래머스 Lv1 - 두 정수 사이의 합
function solution(a, b) {
  if (a === b) return a;
  const big = Math.max(a, b);
  const small = Math.min(a, b);
  let result = 0;
  for (let i = 0; i < big - small + 1; i++) {
    result += small + i;
  }
  return result;
}
