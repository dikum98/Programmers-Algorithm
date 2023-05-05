// 나머지가 1이 되는 수 찾기

function solution(n) {
  let x = 1;
  while (true) {
    if (n % x++ === 1) return --x;
  }
}
