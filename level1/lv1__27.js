// 프로그래머스 lv1 - 음양 더하기

function solution(absolutes, signs) {
  return absolutes.reduce((sum, num, i) => {
    if (!signs[i]) num = -num;
    return sum + num;
  }, 0);
}
