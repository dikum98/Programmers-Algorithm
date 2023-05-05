// 프로그래머스 Lv1 - 문자열 나누기

const solution = (s, skip, index) => {
  /** 문자열 s에서 각 문자를 index만큼 뒤의 알파벳으로 바꾼다. z 다음은 a이다.
   * 각 문자의 index만큼 뒤로 갈 때 skip에 포함된 문자가 있는 경우 index까지 가는 카운팅에서 제외한다.
   * 완성된 문자열을 반환하라.
   */
  const getNextAlphabet = (alphabet) => {
    /** 받은 문자를 숫자로 바꾸고 +1 한 다음 다시 문자로 바꿔 반환 */
    const nextCode = alphabet.charCodeAt(0) + 1;
    const nextAlphabet = nextCode > 122 ? "a" : String.fromCharCode(nextCode);

    return nextAlphabet;
  };

  return [...s].reduce((answer, cur) => {
    for (let i = 0; i < index; i++) {
      cur = getNextAlphabet(cur);
      while (skip.includes(cur)) {
        cur = getNextAlphabet(cur);
      }
    }
    return answer + cur;
  }, "");
};
