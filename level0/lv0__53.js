// 프로그래머스 Lv0 - 최댓값 만들기 (2)

function solution(numbers) {
  const accendingNums = [...numbers].sort((a, b) => a - b);

  return Math.max(
    accendingNums.at(-1) * accendingNums.at(-2),
    accendingNums[0] * accendingNums[1]
  );
}
