// 프로그래머스 Lv0 - 순서쌍의 개수

function solution(n) {
  let orderedPairCount = 0;

  for (let i = 1; i <= n; i++) {
    if (Number.isInteger(n / i)) orderedPairCount += 1;
  }

  return orderedPairCount;
}
