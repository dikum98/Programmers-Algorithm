// 프로그래머스 Lv1 - 소수 만들기

function solution(nums) {
  const isFrime = (n) => {
    for (let l = 2; l * l <= n; l++) {
      if (n % l === 0) {
        return false
      }
    }
    return true
  }
  let primeNumCount = 0

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j]
      for (let k = j + 1; k < nums.length; k++) {
        sum += nums[k]
        if (isFrime(sum)) primeNumCount += 1
        sum -= nums[k]
      }
      sum -= nums[j]
    }
    sum -= nums[i]
  }
  return primeNumCount
}
