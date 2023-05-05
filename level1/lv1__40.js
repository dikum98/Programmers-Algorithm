// 프로그래머스 Lv1 - 명예의 전당 (1)

const solution = (k, scores) => {
  const honors = [];
  const result = [];

  // [10, 100, 20, 150, 1, 100, 200]
  scores.forEach(score => {
    const loser = honors.length !== 0 ? Math.min(...honors) : score;

    if (honors.length < k) {
      honors.push(score);
    } else if (honors.length === k && loser < score) {
      honors.splice(honors.indexOf(loser), 1);
      honors.push(score);
    }

    result.push(Math.min(...honors));
  });

  return result;
};

const solution2 = (k, scores) => {
  const honors = [];
  const result = [];

  // [10, 100, 20, 150, 1, 100, 200]
  scores.forEach(score => {
    const loser = Math.min(...honors);

    if (honors.length === k && loser < score)
      honors.splice(honors.indexOf(loser), 1);

    if (honors.length < k) honors.push(score);

    result.push(Math.min(...honors));
  });

  return result;
};

const solution3 = (k, scores) => {
  const honors = [];
  const result = [];

  // [10, 100, 20, 150, 1, 100, 200]
  scores.forEach(score => {
    honors.push(score);
    honors.sort((a, b) => b - a);
    if (honors.length > k) honors.pop();
    result.push(honors.at(-1));
  });

  return result;
};
