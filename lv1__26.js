// 프로그래머스 lv1 - 최소직사각형

function solution(sizes) {
  sizes = sizes.map((v) => v.sort((a, b) => b - a));
  let [maxWidth, maxHeight] = [0, 0];
  sizes.forEach((v) => {
    if (v[0] > maxWidth) maxWidth = v[0];
    if (v[1] > maxHeight) maxHeight = v[1];
  });

  return maxHeight * maxWidth;
}
