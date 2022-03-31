// 프로그래머스 lv1 - 부족한 금액 계산하기

function solution(price, money, count) {
  let cost = (count * (price * 2 + (count - 1) * price)) / 2;
  if (money - cost >= 0) return 0;
  else return cost - money;
}
