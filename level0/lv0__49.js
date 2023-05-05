// 프로그래머스 Lv0 - 문자열 정렬하기 (!)

function solution(my_string) {
  const nums = [];

  for (let i = 0; i < my_string.length; i++) {
    if (Number.isInteger(Number(my_string[i]))) nums.push(Number(my_string[i]));
  }

  return nums.sort((a, b) => a - b);
}
