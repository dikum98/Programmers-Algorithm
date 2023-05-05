// 프로그래머스 Level0 - 컨트롤 제트

const solution = (s) => {
  let sum = 0;

  s.split(" ").forEach((v, i, arr) => {
    Number.isInteger(+v) ? (sum += +v) : (sum -= +arr[i - 1]);
  });

  return sum;
};
