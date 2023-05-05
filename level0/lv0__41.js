// 프로그래머스 Lv0 - 모음 제거

function solution(my_string) {
  return my_string.replaceAll(/[aeiou]/g, "");
}
