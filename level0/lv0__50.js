// 프로그래머스 Lv0 - 가장 큰 수 찾기

function solution(array) {
  const maxNum = Math.max(...array);
  return [maxNum, array.indexOf(maxNum)];
}
