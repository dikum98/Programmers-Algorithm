// 프로그래머스 Lv1 가운데 글자 가져오기

// 0.03~0.13ms
function solution(s) {
  return s.length % 2
    ? s[Math.floor(s.length / 2)]
    : s[s.length / 2 - 1] + s[s.length / 2];
}

// 0.04~0.08ms
function solution(s) {
  if (Number.isInteger(s.length / 2)) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    return s[parseInt(s.length / 2)];
  }
}

// 0.03~0.07ms
function solution(s) {
  return s[s.length / 2]
    ? s[s.length / 2 - 1] + s[s.length / 2]
    : s[(s.length - 1) / 2];
}
