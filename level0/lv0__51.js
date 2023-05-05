// 프로그래머스 Lv0 - 배열 회전시키기

function solution(numbers, direction) {
  const turnedRightArr = [numbers.at(-1), ...numbers.slice(0, -1)];
  const turnedLeftArr = [...numbers.slice(1), numbers[0]];

  return direction === "right" ? turnedRightArr : turnedLeftArr;
}
