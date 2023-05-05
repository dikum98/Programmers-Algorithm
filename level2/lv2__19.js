// 프로그래머스 Lv2 - 하노이의 탑

function solution(n) {
  const result = [];

  function hanoi(n, from, to, via) {
    if (n === 1) {
      move(1, from, to);
    } else {
      hanoi(n - 1, from, via, to);
      move(n, from, to);
      hanoi(n - 1, via, to, from);
    }
  }

  function move(n, from, to) {
    console.log(`${n}번 원반을 ${from}에서 ${to}로 이동`);
    result.push([from, to]);
  }

  hanoi(n, 1, 2, 3);

  console.log(result);
  return result;
}

solution(3);
