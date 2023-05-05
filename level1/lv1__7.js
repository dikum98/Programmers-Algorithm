// 프로그래머스 Lv1 문자열 내 마음대로 정렬하기

// strings의 n번째 인덱스를 기준으로 문자열을 오름차순 정렬하기

// 1. 오름차순으로 정렬한다. 2. n번째 글자를 기준으로 다시 오름차순 정렬한다.
// 0.05ms~0.11ms
function solution(strings, n) {
  strings.sort();
  let answer = strings.sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
  return answer;
}
