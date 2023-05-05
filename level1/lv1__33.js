// 프로그래머스 lv1 - [1차] 다트 게임 (카카오)

const solution = dartResult => {
  let tempArr = [];
  let temp = '';
  const scoreArr = [];
  const bonus = { S: 1, D: 2, T: 3 };
  const options = { '#': -1, '*': 2 };

  for (let i = 0; i < dartResult.length; i++) {
    temp += dartResult[i];
    if (Object.keys(bonus).includes(dartResult[i])) {
      tempArr.push(temp);
      temp = '';
    }

    if (Object.keys(options).includes(dartResult[i])) {
      tempArr[tempArr.length - 1] += temp;
      temp = '';
    }
  }

  tempArr = tempArr.map(v => {
    if (v.includes('10')) return ['10', ...v.slice(2).split('')];
    return v.split('');
  });

  tempArr.forEach((arr, i) => {
    scoreArr.push(
      arr[2]
        ? arr[0] ** bonus[`${arr[1]}`] * options[`${arr[2]}`]
        : arr[0] ** bonus[`${arr[1]}`]
    );

    if (arr[2] === '*' && i !== 0) scoreArr[i - 1] *= options[`${arr[2]}`];
  });

  return scoreArr.reduce((acc, cur) => acc + cur, 0);
};

const solution2 = dartResult => {
  const scoreArr = [];
  const bonus = { S: 1, D: 2, T: 3 };
  const options = { '#': -1, '*': 2 };
  let numBuffer = '';

  for (let i = 0; i < dartResult.length; i++) {
    const currentChar = dartResult[i];

    if (!isNaN(currentChar)) numBuffer += currentChar;
    else if (bonus[currentChar]) {
      const score = (+numBuffer) ** bonus[currentChar];
      scoreArr.push(score);
      numBuffer = '';
    } else if (options[currentChar]) {
      scoreArr[scoreArr.length - 1] *= options[currentChar];

      if (currentChar === '*' && scoreArr.length !== 1)
        scoreArr[scoreArr.length - 2] *= options[currentChar];
    }
  }

  return scoreArr.reduce((a, b) => a + b, 0);
};

const solution3 = dartResult => {
  let darts = dartResult.match(/\d.?\D/g);
  const bonus = { S: 1, D: 2, T: 3 };
  const options = { '#': -1, '*': 2, undefined: 1 };

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/);
    const score = split[1] ** bonus[split[2]] * options[split[3]];

    if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= split[3];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b, 0);
};
