// 프로그래머스 Lv0 - 삼각형의 완성조건 (1)

function solution(sides) {
  const biggest = Math.max(...sides);

  return biggest * 2 < sides.reduce((acc, cur) => acc + cur, 0) ? 1 : 2;
}
