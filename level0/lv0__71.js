// 프로그래머스 Level0 - 한 번만 등장한 문자

const solution = (s) => {
  const characterInfo = {};
  let answer = "";

  [...s].forEach((c) =>
    characterInfo[c] ? (characterInfo[c] += 1) : (characterInfo[c] = 1)
  );

  for (const c in characterInfo) {
    if (characterInfo[c] === 1) answer += c;
  }

  return [...answer].sort().join("");
};

const solution2 = (s) => {
  const res = [];

  for (const c of s) {
    if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  }

  return res.sort().join("");
};
