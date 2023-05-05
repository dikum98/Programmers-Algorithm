// 프로그래머스 Level0 - 가까운 수

function solution(array, n) {
  const accendingNums = [...array].sort((a, b) => a - b);
  const temp = accendingNums.map((num) => Math.abs(num - n));

  return accendingNums[temp.indexOf(Math.min(...temp))];
}
