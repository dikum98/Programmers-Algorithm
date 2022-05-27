// 프로그래머스 lv2 - 숫자의 표현

function solution(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) {
        count += 1;
        break;
      }
      if (sum > n) break;
    }
  }

  return count;
}
