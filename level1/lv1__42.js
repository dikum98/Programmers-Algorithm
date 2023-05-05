// 프로그래머스 Lv1 - 과일 장수

const solution = (k, m, score) => {
  const boxCount = Math.floor(score.length / m);
  const accendingScore = [...score].sort((a, b) => a - b);
  let sum = 0;

  for (let i = 1; i <= boxCount; i++) {
    sum +=
      accendingScore.slice(
        accendingScore.length - m * i,
        accendingScore.length - m * i + m
      )[0] * m;
  }

  return sum;
};
