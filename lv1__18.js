// 프로그래머스 lv1 - 크레인 인형뽑기 (카카오)

function solution(board, moves) {
  let answer = 0;
  const basket = [];
  let turnnedBoard = new Array(board.length).fill([]);

  // 2차원 배열 돌리기
  for (let i = 0; i < board.length; i++) {
    let temp = [];
    for (let j = 0; j < board.length; j++) {
      temp.push(board[board.length - 1 - j][i]);
    }
    turnnedBoard[i] = turnnedBoard[i].concat(temp);
  }
  turnnedBoard = turnnedBoard.map((row) => row.filter((v) => v !== 0));

  // 바구니에 인형 담기
  for (const pos of moves) {
    if (turnnedBoard[pos - 1][turnnedBoard[pos - 1].length - 1] === 0) continue;
    basket.push(turnnedBoard[pos - 1].pop());
  }

  // 이웃한 같은 인형 제거
  let i = 0;
  while (true) {
    if (!basket[i]) break;
    if (basket[i] === basket[i + 1]) {
      basket.splice(i, 2);
      answer += 2;
      i = 0;
    } else {
      i++;
    }
  }

  return answer;
}
