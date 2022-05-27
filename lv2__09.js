// 프로그래머스 lv2 - 다음 큰 숫자

function solution(n) {
  let answer = n + 1;
  while (true) {
    if (
      n
        .toString(2)
        .split('')
        .filter((v) => v === '1').length ===
      answer
        .toString(2)
        .split('')
        .filter((v) => v === '1').length
    )
      return answer;
    answer += 1;
  }
}
