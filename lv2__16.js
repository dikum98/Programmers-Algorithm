// 프로그래머스 lv2 - 영어 끝말잇기

function solution(n, words) {
  // n : 끝말잇기에 참여하는 사람 수
  // words : 참가자 순서대로 말한 단어 배열

  // return [who, turn]
  // who : 탈락한 번쨰까지의 등장한 단어의 수 % n. 0이라면 마지막 사람(n)
  // turn : 탈락한 번째까지의 등장한 단어의 수 / n을 반올림

  let [who, turn] = [null, null];

  // 이전에 등장했는지 체크
  const newMap = new Map();
  for (let i = 0; i < words.length; i++) {
    if (newMap.has(words[i])) {
      const talkedWords = i + 1;
      who = talkedWords % n ? talkedWords % n : n;
      turn = Math.ceil(talkedWords / n);
      console.log(talkedWords, who, turn);
      return [who, turn];
    }
    newMap.set(words[i], true);
  }

  for (let i = 0; i < words.length - 1; i++) {
    if (words[i][words[i].length - 1] !== words[i + 1][0]) {
      const talkedWords = i + 2;
      who = talkedWords % n ? talkedWords % n : n;
      turn = Math.ceil(talkedWords / n);
      console.log(talkedWords, who, turn);
      return [who, turn];
    }
  }

  return [0, 0];
}
