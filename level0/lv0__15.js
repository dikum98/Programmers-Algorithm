// 프로그래머스 Lv0 - 머쓱이보다 키 큰 사람

function solution(array, height) {
  return array.filter((v) => v > height).length;
}
