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

function solution(n, lost, reserve) {
  // n명의 학생이 체육복을 가지고 있다가
  const clothesState = Array(n).fill(1);

  // 도난 당한 경우, 여벌이 있는 경우를 적용
  for (let i = 0; i < n; i++) {
    if (lost.includes(i + 1)) clothesState[i] -= 1;
    if (reserve.includes(i + 1)) clothesState[i] += 1;
  }

  for (let i = 0; i < n; i++) {
    if (i >= 1 && clothesState[i] === 2 && clothesState[i - 1] === 0) {
      clothesState[i] -= 1;
      clothesState[i - 1] += 1;
    } else if (clothesState[i] === 2 && clothesState[i + 1] === 0) {
      clothesState[i] -= 1;
      clothesState[i + 1] += 1;
    }
  }
  return clothesState.filter((v) => v !== 0).length;
}
