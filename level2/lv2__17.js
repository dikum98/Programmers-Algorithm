// 프로그래머스 lv2 - 가장 큰 수 (정렬)

function solution(numbers) {
  if (numbers.every((v) => v === 0)) return '0';
  numbers.sort((a, b) => sortNums(a, b));
  return numbers.reduce((a, c) => (a += c), '');
}

function sortNums(a, b) {
  const first = +[a, b].join('');
  const second = +[b, a].join('');
  return second - first;
}
