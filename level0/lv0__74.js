// 프로그래머스 Level0 - 소인수 분해

const solution = (s) => {
  const primeFactors = [];

  while (s !== 1) {
    for (let i = 2; i <= s; i++) {
      if (s % i === 0) {
        s /= i;
        if (!primeFactors.includes(i)) primeFactors.push(i);
        break;
      }
    }
  }

  return primeFactors;
};
