function solution(n, quests) {
  const temp = [...new Set(quests.flat())];
  const done = [];

  for (let i = 1; i <= n; i++) {
    if (!temp.includes(i)) done.push(i);
  }

  quests.forEach((relation, i) => {
    if (!done.includes(relation[0])) done.push(relation[0]);
    if (done.includes(relation[0])) done.push(relation[1]);
  });

  return done;
}

solution(5, [
  [1, 3],
  [1, 4],
  [3, 5],
  [5, 4],
]);
