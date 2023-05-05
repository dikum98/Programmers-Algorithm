// 프로그래머스 Lv2 - 짝지어 제거하기 (스택)

// while문이 더 빠름
function solution(s) {
  if (s.length % 2) return 0;

  const stack = [];
  let len = s.length;
  let i = 0;
  while (len--) {
    if (stack.length === 0) stack.push(s[i]);
    else if (stack[stack.length - 1] === s[i]) stack.pop();
    else stack.push(s[i]);
    i++;
  }

  return stack.length ? 0 : 1;
}

function solution(s) {
  if (s.length % 2) return 0;

  const stack = [];

  for (const c of s) {
    if (stack.length === 0) stack.push(c);
    else if (stack[stack.length - 1] === c) stack.pop();
    else stack.push(c);
  }
  return stack.length ? 0 : 1;
}
