// 프로그래머스 Lv0 - 약수 구하기

function solution(n) {
  const divisorArr = [];
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) divisorArr.push(i);
  }

  return divisorArr;
}
