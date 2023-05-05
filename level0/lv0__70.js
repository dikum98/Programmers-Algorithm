// 프로그래머스 Level0 - 숨어있는 숫자의 덧셈 (2)

const solution = (my_string) => {
  const arr = my_string.split("");
  let temp = "";
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // 현재 값이 숫자이고 그 다음 값도 숫자이면
    if (Number.isFinite(+arr[i]) && Number.isFinite(+arr[i + 1])) {
      temp += arr[i];
    }

    // 현재 값이 숫자이고 그 다음 값은 문자이면
    if (Number.isFinite(+arr[i]) && !Number.isFinite(+arr[i + 1])) {
      temp += arr[i];
      sum += +temp;
      temp = "";
    }
  }

  return sum;
};

const solution2 = (my_string) => {
  const nums = my_string.match(/[0-9]+/g);

  return nums ? nums.reduce((acc, cur) => acc + +cur, 0) : 0;
};
