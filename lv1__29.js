// 프로그래머스 Lv1 - 폰켓몬

function solution(nums) {
  const typeOfMon = new Set(nums);
  if (nums.length / 2 > typeOfMon.size) return typeOfMon.size;
  return nums.length / 2;
}
