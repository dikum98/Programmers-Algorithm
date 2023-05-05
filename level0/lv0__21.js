// 프로그래머스 Lv0 - 짝수 홀수 개수

function solution(num_list) {
  let even = 0;
  let odd = 0;

  num_list.forEach((num) => {
    if (num % 2) odd += 1;
    else even += 1;
  });

  return [even, odd];
}
