// 프로그래머스 Level0 - k의 개수

// function solution(from, to, k) {
//   let count = 0;

//   for (let i = from; i <= to; i++) {
//     if (i.toString().includes(k)) count += [...i.toString()].filter(v => +v === k).length;
//   }

//   return count;
// }

function solution(from, to, k) {
  let a = '';

  for (let i = from; i <= to; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}