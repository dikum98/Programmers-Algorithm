// 프로그래머스 Lv1 - 기사단원의 무기

const solution = (number, limit, power) => {
  let totalWeight = 0;

  const getYaksu = (num) => {
    const yaksues = [];

    for (let i = 1; i * i <= num; i++) {
      if (!(num % i)) {
        yaksues.push(i);
        yaksues.push(num / i);
      }
    }
    return new Set(yaksues).size;
  };

  for (let i = 1; i <= number; i++) {
    if (getYaksu(i) > limit) totalWeight += power;
    else totalWeight += getYaksu(i);
  }

  return totalWeight;
};
