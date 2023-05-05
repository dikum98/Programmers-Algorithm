// 프로그래머스 Lv1 - 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  const worst = lottos.filter((v) => win_nums.includes(v)).length;
  const best = worst + lottos.filter((v) => v === 0).length;

  return [7 - best > 6 ? 6 : 7 - best, 7 - worst > 6 ? 6 : 7 - worst];
}
