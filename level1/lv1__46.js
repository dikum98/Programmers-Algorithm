// 프로그래머스 Lv1 - 숫자 짝궁

const solution = (X, Y) => {
  const x = Array(10).fill(0);
  const y = Array(10).fill(0);
  const long = X.length > Y.length ? X : Y;
  let same = "";

  for (let i = 0; i < long.length; i++) {
    x[+X[i]]++;
    y[+Y[i]]++;
  }

  for (let i = 9; i >= 0; i--) {
    if (x[i] && y[i]) {
      x[i] > y[i]
        ? (same += `${i}`.repeat(y[i]))
        : (same += `${i}`.repeat(x[i]));
    }
  }

  if (!same) return "-1";
  if (!+same) return "0";

  return same;
};

const solution2 = (X, Y) => {
  let answer = "";
  const numObj = {};

  for (const c of X) numObj[c] = (numObj[c] || 0) + 1;
  for (const c of Y) {
    if (!numObj[c]) continue;
    answer += c;
    numOf[c]--;
  }

  if (!answer) return "-1";
  if (!+answer) return "0";

  return [...answer].sort((a, b) => b - a).join("");
};
