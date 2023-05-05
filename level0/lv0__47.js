// 프로그래머스 Lv0 - 가위 바위 보

function solution(rsp) {
  let winCase = "";

  for (let i = 0; i < rsp.length; i++) {
    winCase += rsp[i] === "2" ? "0" : rsp[i] === "0" ? "5" : "2";
  }

  return winCase;
}
