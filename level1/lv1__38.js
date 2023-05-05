// 프로그래머스 Lv1 - 푸드 파이트 대회

const solution = (food) => {
  let foodline = '';

  for (let i = 1; i < food.length; i++)
    foodline += `${i}`.repeat(Math.floor(food[i] / 2));

  return foodline + 0 + [...foodline].reverse().join('');
};
