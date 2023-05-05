// 프로그래머스 Lv0 - 아이스 아메리카노

function solution(money) {
  let howManyCoffee = Math.floor(money / 5500);
  let changes = money % 5500;

  return [howManyCoffee, changes];
}
