// 프로그래머스 Level0 - 캐릭터의 좌표

const solution = (keyinput, board) => {
  const res = [0, 0];
  const [horizontal, vertical] = [
    Math.floor(board[0] / 2),
    Math.floor(board[1] / 2),
  ];

  keyinput.forEach((key) => {
    if (key === "left" && res[0] > -horizontal) res[0] -= 1;
    if (key === "right" && res[0] < horizontal) res[0] += 1;
    if (key === "up" && res[1] < vertical) res[1] += 1;
    if (key === "down" && res[1] > -vertical) res[1] -= 1;
  });

  return res;
};
