// 프로그래머스 lv2 - 최댓값과 최솟값

function solution(s) {
  const numsArr = s.split(' ');
  let answer = Math.min(...numsArr);
  answer += ` ${Math.max(...numsArr)}`;
  return answer;
}
