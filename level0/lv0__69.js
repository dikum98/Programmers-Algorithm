// 프로그래머스 Level0 - 진료순서 정하기

const solution = (emergency) => {
  const temp = [...emergency].sort((a, b) => b - a);

  return emergency.map((num) => temp.indexOf(num) + 1);
};
