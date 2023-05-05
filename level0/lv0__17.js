// 프로그래머스 Lv0 - 점의 위치 구하기

function solution(dot) {
  const [x, y] = dot;

  if (x > 0 && y > 0) return 1;
  else if (x < 0 && y > 0) return 2;
  else if (x < 0 && y < 0) return 3;
  else return 4;
}
