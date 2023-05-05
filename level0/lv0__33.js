// 프로그래머스 Lv0 - 배열의 유사도

function solution(s1, s2) {
  const intersection = [...s1, ...s2].filter(
    (v, i, arr) => arr.indexOf(v) !== i
  );

  return intersection.length;
}
