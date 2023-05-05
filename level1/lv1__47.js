// 프로그래머스 Lv1 - 옹알이 (2)

const solution = (babbling) => {
  /** babbling 배열 각 요소 문자열에 ["aya", "ye", "woo", "ma"] 중 하나 이상이 포함되는지
   * 같은 문자열이 연속으로 오면 카운트 X, ex) "yeye"
   * babbling 배열 각 요소 문자열.includes() 포함되어 있으면 replace로 제거하고 카운트 +1
   */
  let count = 0;
  const possible = ["aya", "ye", "woo", "ma"];
  const impossible = ["ayaaya", "yeye", "woowoo", "mama"];

  babbling.forEach((word, i) => {
    for (let i = 0; i < 4; i++) {
      if (word.includes(impossible[i])) return;
    }

    /** bubbling[i]에 대해 반복적으로 버블링 삭제, 삭제할 버블링이 없어졌을 때 중단하고, 그게 빈문자열이면 카운트 +1, 아니면 넘어감 */
    babbling[i] = babbling[i].replace(/aya|ye|woo|ma/g, "");

    if (!babbling[i]) count++;
  });

  return count;
};
