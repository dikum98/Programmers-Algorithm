// 프로그래머스 Level0 - 외계어 사전

const solution = (spell, dic) =>
  dic.find((word) => {
    let temp = word;

    if (spell.length !== word.length) return false;

    for (let i = 0; i < spell.length; i++) {
      if (!word.includes(spell[i])) return false;
    }

    return true;
  })
    ? 1
    : 2;
