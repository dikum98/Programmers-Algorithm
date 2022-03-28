// 프로그래머스 Lv1 - 체육복 (그리디)

function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // (여벌 가져온 학생이 도난단한 경우)
  lost.forEach((v) => {
    if (reserve.includes(v)) {
      delete lost[lost.indexOf(v)];
      delete reserve[reserve.indexOf(v)];
    }
  });
  lost = lost.filter((v) => v);
  reserve = reserve.filter((v) => v);

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (Math.abs(lost[i] - reserve[j]) === 1) {
        delete lost[i];
        delete reserve[j];
      }
    }
  }
  console.log(lost, reserve);

  lost = lost.filter((v) => v);
  return n - lost.length;
}
