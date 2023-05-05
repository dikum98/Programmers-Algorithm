// 프로그래머스 Lv1 - 대충 만든 자판

const solution = (keymap, targets) => {
  /** keymap 배열의 문자열 원소 중 가능한 가장 빠른 키에 대한 값들을 저장,
   * targets 배열의 각 원소마다 가능한 문자에 대해 가장 빠른 키의 값들을 합한다.
   * targets 배열의 각 원소마다 가능한 문자가 없는 경우 -1을 할당
   */
  const keys = keymap.reduce((map, key) => {
    for (let i = 0; i < key.length; i++) {
      if (!map[key[i]]) map[key[i]] = i + 1;
      else if (map[key[i]] > i + 1) map[key[i]] = i + 1;
    }
    return map;
  }, {});
  // 타겟에서 각 문자를 돌면서 keys의 문자와 비교, 있으면 넣고, 없으면 -1 리턴
  return targets.map((target) => {
    let sum = 0;
    for (const c of target) {
      if (keys[c]) sum += keys[c];
      else return -1;
    }
    return sum;
  });
};
