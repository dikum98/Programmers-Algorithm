// 프로그래머스 Level0 - 팩토리얼

function solution(n) {
  if (n < 3) return n;
    
  for (let i = 1; i <= n; i++) {
    if (factorial(i) > n) return i - 1;
  }
}

function factorial(n) {
  let answer = 1;
  for (let i = 1; i <= n; i++) {
    answer *= i;
  }

  return answer;
}