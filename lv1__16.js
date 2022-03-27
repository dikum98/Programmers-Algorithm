// 프로그래머스 Lv1 - 실패율 (카카오)

function solution(N, stages) {
  const failRates = {}

  for (let i = 1; i <= N; i++) {
    failRates[`${i}`] = 0
  }

  for (let i = 0; i < stages.length; i++) {
    failRates[stages[i]]++
  }

  let stageLength = stages.length
  for (const key in failRates) {
    if (key > N) delete failRates[key]
  }

  for (const key in failRates) {
    failRates[key] = failRates[key] / stageLength
    stageLength = stages.filter((v) => v > key).length
  }

  let orderedFailRates = Object.entries(failRates)
    .sort((a, b) => b[1] - a[1])
    .map((v) => (v = +v[0]))
  return orderedFailRates
}
