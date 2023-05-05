// 프로그래머스 Lv0 - 중앙값 구하기

function solution(array) {
  const accendingArr = [...array].sort((a, b) => a - b);

  return accendingArr[Math.floor(accendingArr.length / 2)];
}
