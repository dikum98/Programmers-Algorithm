// 프로그래머스 Lv0 - 숫자 찾기

function solution(num, k) {
  const temp = ("" + num).split("").map((num) => +num);

  return temp.includes(k) ? temp.indexOf(k) + 1 : -1;
}
