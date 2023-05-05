// 프로그래머스 Level0 - 공 던지기

const solution = (numbers, k) => {
  let temp = [...numbers];

  while (temp.length <= k * 2 - 1) {
    temp = [...temp, ...numbers];
  }

  return temp[k * 2 - 2];
};

const solution2 = (numbers, k) => numbers[(k * 2 - 2) % numbers.length];
