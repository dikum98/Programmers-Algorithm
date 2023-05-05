// 프로그래머스 Lv0 - 배열의 평균값

function solution(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
}
