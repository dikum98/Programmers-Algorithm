// 프로그래머스 Lv1 - 실패율 (카카오)

// 풀이1
function solution(N, stages) {
  const failRates = {};

  for (let i = 1; i <= N; i++) {
    failRates[`${i}`] = 0;
  }

  for (let i = 0; i < stages.length; i++) {
    failRates[stages[i]]++;
  }

  let stageLength = stages.length;
  for (const key in failRates) {
    if (key > N) delete failRates[key];
  }

  for (const key in failRates) {
    failRates[key] = failRates[key] / stageLength;
    stageLength = stages.filter((v) => v > key).length;
  }

  let orderedFailRates = Object.entries(failRates)
    .sort((a, b) => b[1] - a[1])
    .map((v) => (v = +v[0]));
  return orderedFailRates;
}

// 풀이2
function solution(N, stages) {
  let orderedFailRates = [];

  for (let i = 1; i <= N; i++) {
    const uncleared = stages.filter((v) => v === i).length;
    const candidates = stages.filter((v) => v >= i).length;
    orderedFailRates.push([i, uncleared / candidates]);
  }
  // orderedFailRates = [[1, 1/8], [2, 3/7], [3, 2/4], [4, 1/2], [5, 0/1]]

  orderedFailRates.sort((a, b) => b[1] - a[1]);
  orderedFailRates = orderedFailRates.map((v) => v[0]);
  return orderedFailRates;
}
