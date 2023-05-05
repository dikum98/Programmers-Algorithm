// 프로그래머스 Level0 - 문자열 계산하기

const solution = (my_str) => {
  my_str = my_str.split(" ");
  let res = +my_str[0];

  for (let i = 1; i < my_str.length; i++) {
    if (my_str[i] === "+") res += +my_str[++i];
    else if (my_str[i] === "-") res -= +my_str[++i];
  }

  return res;
};
