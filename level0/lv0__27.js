// 프로그래머스 Lv0 - 최댓값 만들기(1)

function solution(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .slice(-2)
    .reduce((acc, cur) => acc * cur, 1);
}
