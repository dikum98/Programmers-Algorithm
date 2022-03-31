// 프로그래머스 lv1 - 없는 숫자 더하기

function solution(numbers) {
  return 45 - numbers.reduce((a, c) => a + c);
}
