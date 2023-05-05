// 프로그래머스 Lv0 - 중복된 숫자 갯수

function solution(array, n) {
  return array.filter((v) => v === n).length;
}
