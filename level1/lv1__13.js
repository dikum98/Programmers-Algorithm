// 프로그래머스 Lv1 - 평균 구하기
function solution(arr) {
  var answer = arr.reduce((a, c, i) => a + c, 0) / arr.length;
  return answer;
}
