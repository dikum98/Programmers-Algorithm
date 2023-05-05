// 프로그래머스 Lv0 - 대문자와 소문자

function solution(my_string) {
  return my_string.replaceAll(/./g, (c) =>
    c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
  );
}
