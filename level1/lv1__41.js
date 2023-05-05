// 프로그래머스 Lv1 - 추억 점수

const solution = (name, yearning, photo) => {
  const scoreOf = name.reduce((obj, cur, i) => {
    obj[cur] = yearning[i];

    return obj;
  }, {});

  return photo.reduce((totalScoreArr, group) => {
    totalScoreArr.push(
      group.reduce(
        (sumOfScore, person) =>
          scoreOf[person] ? sumOfScore + scoreOf[person] : sumOfScore,
        0
      )
    );

    return totalScoreArr;
  }, []);
};

const solution2 = (name, yearning, photo) => {
  const scoreOf = {};

  name.forEach((name, i) => (scoreOf[name] = yearning[i]));

  return photo.map(group =>
    group.reduce(
      (sumOfScore, person) => sumOfScore + scoreOf[person] || sumOfScore,
      0
    )
  );
};
