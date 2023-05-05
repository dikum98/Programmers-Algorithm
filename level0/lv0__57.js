// 프로그래머스 Lv0 - 369 게임

function solution(order) {
  const _order = ("" + order).split("");

  return _order.filter((num) => [3, 6, 9].includes(+num)).length;
}
