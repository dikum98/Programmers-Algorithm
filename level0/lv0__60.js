// 프로그래머스 Level0 - 문자열 정렬하기 (2)

function solution(my_string) {
  return my_string.toLowerCase().split('').sort().join('');
}