// 프로그래머스 Level0 - 직사각형 넓이 구하기

const solution = (dots) => {
  const xsAndYs = dots.reduce(
    (acc, cur) => {
      acc.x = [...acc.x, cur[0]];
      acc.y = [...acc.y, cur[1]];

      return acc;
    },
    { x: [], y: [] }
  );

  return (
    (Math.max(...xsAndYs.x) - Math.min(...xsAndYs.x)) *
    (Math.max(...xsAndYs.y) - Math.min(...xsAndYs.y))
  );
};
