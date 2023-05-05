// 프로그래머스 lv2 - N개의 최소공배수

const GCD = (num1, num2) => {
  if (num2 === 0) return num1;
  else return GCD(num2, num1 % num2);
};

function solution(arr) {
  return arr.reduce((acc, cur) => (acc * cur) / GCD(acc, cur), arr[0]);
}
