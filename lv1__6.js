// 프로그래머스 Lv1 문자열 내림차순으로 배치하기

// 0.03~0.16ms
function solution(s) {
  return [...s].sort().reverse().join("");
}

// 0.05~0.25ms
function solution(s) {
  return s
    .split("")
    .sort((a, b) => (a < b ? 1 : -1))
    .toString();
}

// 0.08~7.75sms
// 가장 큰 문자를 찾고 answer에 넣은 후, 기존 문자열에서 가장 큰 문자를 가장 작은 문자로 바꿈
function solution(a) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    answer += getBiggestNumber(a);
    a = a.replace(getBiggestNumber(a), "A");
  }
  return answer;
}

function getBiggestNumber(a) {
  let word = "A";
  for (let i = 0; i < a.length; i++) {
    if (word < a[i]) word = a[i];
  }
  return word;
}
