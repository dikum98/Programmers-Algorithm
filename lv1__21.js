// 프로그래머스 lv1 - 두 개 뽑아서 더하기

function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (answer.includes(sum)) continue;
      answer.push(sum);
    }
  }
  return answer.sort((a, b) => a - b);
}