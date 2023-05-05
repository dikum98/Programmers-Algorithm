// 프로그래머스 Lv1 - 카드뭉치

const solution = (cards1, cards2, goal) => {
  let j = 0;
  let k = 0;

  for (let i = 0; i < goal.length; i++) {
    if (![cards1[j], cards2[k]].includes(goal[i])) return "No";
    else if (cards1[j] === goal[i]) j += 1;
    else if (cards2[k] === goal[i]) k += 1;
  }

  return "Yes";
};

const solutio2 = (cards1, cards2, goal) => {
  let j = 0;
  let k = 0;

  for (let i = 0; i < goal.length; i++) {
    if (cards1[j] === goal[i]) j++;
    else if (cards2[k] === goal[i]) k++;
    else return "No";
  }

  return "Yes";
};
