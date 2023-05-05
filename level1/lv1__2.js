//프로그래머스 Lv1 나누어 떨어지는 숫자 배열

// 0.06~0.24ms, 최대 2.36ms
function solution(arr, divisor) {
  let answer = [];
  answer = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);
  return answer.length === 0 ? [-1] : answer;
}

// 0.06~0.26ms, 최대 2.87ms
function solution(arr, divisor) {
  let answer = [];
  arr.map((v, i) => {
    if (v % divisor === 0) {
      answer.push(v);
    }
  });
  answer.sort((a, b) => a - b);

  return answer.length === 0 ? [-1] : answer;
}

// 0.06~0.27ms, 최대 2.16ms
function solution(arr, divisor) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer = answer.concat(arr[i]);
    }
  }
  answer.sort((a, b) => a - b);
  if (answer.length === 0) answer = [-1];
  return answer;
}

function solution(arr, divisor) {
  let answer = arr.filter((v) => !(v % divisor)).sort((a, b) => a - b);
  return answer.length === 0 ? [-1] : answer;
}
