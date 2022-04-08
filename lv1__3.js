// 프로그래머스 Lv1 해시 > 완주하지 못한 선수

// 1. participant와 completion을 비교
// 2. completion의 요소와 일치하는 요소를 participant에서 제거
// 3. 마지막 남은 participant 요소를 반환

// includes, find, findIndex, filter, sort, map, forEach, for, reduce
// 1. forEach => 시간초과
function solution(participant, completion) {
  participant.forEach((name) => {
    if (completion.includes(name)) {
      completion.splice(completion.indexOf(name), 1);
      participant.splice(participant.indexOf(name), 1, '');
    }
  });
  return participant.join('');
}

// 2. for => 시간초과
function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    participant.splice(participant.indexOf(completion[i]), 1);
  }
  return participant.join('');
}

// 3. 정렬 후 순서대로 다른지 찾기 => 통과
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
