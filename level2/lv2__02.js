// 프로그래머스 lv2 - 행렬의 곱셈

function solution(arr1, arr2) {
  const answer = Array.from({ length: arr1.length }, () =>
    Array(arr2[0].length).fill(0)
  );

  for (let answerRow = 0; answerRow < answer.length; answerRow++) {
    for (let i = 0; i < arr2[0].length; i++) {
      for (let j = 0; j < arr1[0].length; j++) {
        answer[answerRow][i] += arr1[answerRow][j] * arr2[j][answerRow];
      }
    }
  }

  return answer;
}
