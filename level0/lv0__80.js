// 프로그래머스 Level0 - 구슬을 나누는 경우의 수

const factorial = (n) => {
  let res = 1;

  for (let i = 1; i <= n; i++) res *= i;

  return res;
};

const solution = (balls, share) =>
  Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
