// 프로그래머스 Lv0 - 주사위의 개수

function solution(box, n) {
  const [w, v, h] = box;
  let maxDiceCount = Math.floor(w / n) * Math.floor(v / n) * Math.floor(h / n);

  return maxDiceCount;
}
