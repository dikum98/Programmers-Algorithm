// 프로그래머스 Lv0 - 옹알이 (1)

function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let count = 0;

  babbling.forEach((babble) => {
    while (1) {
      const temp = babble;
      words.forEach((word) => {
        if (babble.slice(0, word.length) === word)
          babble = babble.slice(word.length);
      });
      if (temp === babble) break;
      if (babble === "") {
        count += 1;
        break;
      }
    }
  });

  return count;
}
