// 프로그래머스 lv1 - 숫자 문자열과 영단어 (카카오)

function solution(s) {
  const numObj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let numStr = '';
  let answer = '';
  for (const c of s) {
    if (Number.isInteger(+c)) answer += c;
    else {
      numStr += c;
      if (numStr in numObj) {
        answer += numObj[numStr];
        numStr = '';
      }
    }
  }
  return +answer;
}
