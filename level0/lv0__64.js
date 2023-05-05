// 프로그래머스 Level0 - A로 B 만들기

function solution(before, after) {
  before = before.split('').sort().join('');
  after = after.split('').sort().join('');

  return before === after ? 1 : 0;
}