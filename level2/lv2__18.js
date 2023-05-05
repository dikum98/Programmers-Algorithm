// 프로그래머스 lv2 - 소수 찾기 (완전탐색)

function solution(number) {
  const allNums = getAllNumbers(number);
  let count = 0;
  for (let i = 0, len = allNums.length; i < len; i++) {
    if (isPrime(allNums[i])) count += 1;
  }

  return count;
}

function getPermutations(arr, pickedNum) {
  const result = [];
  if (pickedNum === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const Permutations = getPermutations(rest, pickedNum - 1);
    const attached = Permutations.map((Permutation) => [fixed, Permutation]);
    result.push(...attached);
  });
  return result;
}

function getAllNumbers(number) {
  const numberArr = number.split('');
  let result = [];

  for (let i = 1, len = numberArr.length; i <= len; i++) {
    result.push(...getPermutations(numberArr, i));
  }
  result = result.map((v) => v.flat(number.length - 1));
  for (let i = 0, len = result.length; i < len; i++) {
    while (result[i][0] === '0') {
      result[i].shift();
    }
  }
  result = deleteDup(result);
  console.log(result);
  return result;
}

function deleteDup(arr) {
  let result = arr.join('|').split('|');
  result = [...new Set(result)]
    .filter((v) => v)
    .map((v) => v.split(','))
    .map((v) => v.join(''));
  return result;
}

function isPrime(num) {
  if (!num || num === 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  console.log(num, 'is Prime Num');
  return true;
}
