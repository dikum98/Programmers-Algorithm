// 프로그래머스 Lv1 - 문자열 나누기

const solution = (s) => {
  /** 처음 나온 문자열과 다른 문자열의 개수가 동일해질 때 커트하고 카운트 +1
   * 문자열 끝에 다다랐을 때 카운트 +1
   */
  let count = 0;
  let originChar = "";
  let diffChar = "";

  for (const c of s) {
    if (originChar === "") originChar = c;
    else if (originChar[0] === c) originChar += c;
    else if (originChar[0] !== c) diffChar += c;
    if (originChar.length === diffChar.length) {
      originChar = "";
      diffChar = "";
      count++;
    }
  }
  if (originChar) count++;

  return count;
};

const solution2 = (s) => {
  let count = 0;
  let current;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      answer++;
      current = s[i];
      count = 1;
    } else {
      current === s[i] ? count++ : count--;
    }
  }

  return answer;
};
