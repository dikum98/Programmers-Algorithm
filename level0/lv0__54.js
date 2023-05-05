// 프로그래머스 Lv0 - 외계행성의 나이

function solution(age) {
  const nums = ("" + age).split("");

  return nums.map((num) => String.fromCharCode(+num + 97)).join("");
}
