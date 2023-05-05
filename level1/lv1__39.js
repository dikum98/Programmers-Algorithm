// 프로그래머스 Lv1 - 가장 가까운 같은 글자

const solution = (s) => {
  const res = [-1];

  for (let i = 1; i < s.length; i++) {
    const temp = s.slice(0, i);
    const lastIdx = temp.lastIndexOf(s[i], i - 1);
    const len = lastIdx === -1 ? -1 : i - lastIdx;

    res.push(len);
  }

  return res;
};

const solution2 = (s) => {
  const hash = {};

  return [...s].map((v, i) => {
    const val = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;

    return val;
  });
};
