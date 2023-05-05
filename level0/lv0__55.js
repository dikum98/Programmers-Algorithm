// 프로그래머스 Lv0 - 피자 나눠 먹기 (2)

function solution(n) {
  for (let pizza = 6; ; pizza += 6) {
    if (!(pizza % n)) return pizza / 6;
  }
}
