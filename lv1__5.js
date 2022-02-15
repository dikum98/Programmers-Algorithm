// 프로그래머스 Lv1 정렬 > K번째 수

function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    const [start, end, target] = commands[i];
    answer.push(array.slice(start - 1, end).sort((a, b) => a - b)[target - 1]);
  }
  return answer;
}
