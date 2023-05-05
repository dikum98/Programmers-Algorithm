// 프로그래머스 lv2 - 올바른 괄호

function solution(s) {
  // 괄호가 홀수개인 경우
  if (s.length % 2 === 1) return false;

  const stack = [];

  for (const c of s) {
    if (c === '(') stack.push(c);
    else if (c === ')') {
      // 스택이 비었는데 닫는 괄호부터 들어오는 경우
      if (stack.length === 0) return false;

      // 괄호 짝이 맞는 경우
      if (stack[stack.length - 1] === '(') stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
}
