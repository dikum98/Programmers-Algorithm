// 프로그래머스 Level0 - 합성수 찾기

function solution(n) {
  let compositeNumberCount = 0;

  for (let i = 1; i <= n; i++) {
    let divisorCount = 0;
    for (let j = 1; j <= i; j++) {
      if (!(i % j)) divisorCount += 1;
      if (divisorCount > 2) {
        compositeNumberCount += 1;
        break;
      }
    }
  }

  return compositeNumberCount;
}