// 프로그래머스 Lv0 - 각도기

function solution(angle) {
  if (angle < 90) return 1;
  if (angle === 90) return 2;
  if (angle < 180) return 3;
  return 4;
}