// 프로그래머스 Lv1 - 크기가 작은 부분 문자열

const solution = (t, p) => {
  const compareNums = [];

  for (let i = 0; i <= t.length - p.length; i++)
    compareNums.push(+t.slice(i, i + p.length));

  return compareNums.filter((num) => num <= +p).length;
};
