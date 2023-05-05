// 프로그래머스 Lv0 - 자릿수 더하기

function solution(n) {
  const numStr = n + "";
  let digitSum = 0;

  for (let i = 0; i < numStr.length; i++) {
    digitSum += Number(numStr[i]);
  }

  return digitSum;
}
