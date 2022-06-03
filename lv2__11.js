// 프로그래머스 lv2 - [3차] n진수 게임 (카카오)

function solution(n, t, m, p) {
  // n진수로 m명 중 p번째로 t개의 숫자를 말해야 함.
  let numStr = ''; // n진수 숫자를 나열한 문자열
  let num = 0;
  while (numStr.length < m * t) {
    // m명이 한 번씩 말하니까 m * t의 길이만큼 문자열이 필요함
    numStr += num.toString(n);
    num += 1;
  }

  let answer = '';
  let i = 0;
  while (answer.length < t) {
    // answer의 길이가 t가 될 때까지 반복
    answer += numStr[p + m * i - 1];
    i += 1;
  }

  return answer.toUpperCase();
}
