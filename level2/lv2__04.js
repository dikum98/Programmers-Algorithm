// 프로그래머스 lv2 - JadenCase 문자열 만들기

function solution(s) {
  return s
    .split(' ')
    .map((v) => {
      if (v === '') return;
      v = v.toLowerCase();
      return v[0].toUpperCase() + v.slice(1);
    })
    .join(' ');
}
