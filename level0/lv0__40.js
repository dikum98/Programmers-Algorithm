// 프로그래머스 Lv0 - 숨어있는 숫자의 덧셈 (1)

function solution(my_string) {
  let digitSum = 0;

  for (let i = 0; i < my_string.length; i++) {
    if (Number(my_string[i])) digitSum += Number(my_string[i]);
  }

  return digitSum;
}
