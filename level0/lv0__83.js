// 프로그래머스 Level0 - 종이 자르기

const solution = (M, N) => {
  if (M === 1 && N === 1) return 0;

  return M * N - 1;
};
