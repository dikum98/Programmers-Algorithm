// 프로그래머스 Level0 - 잘라서 배열로 저장하기

const solution = (my_str, n) => {
  const res = [];

  for (let i = 0; i < my_str.length; i += n) res.push(my_str.slice(i, i + n));

  return res;
};
