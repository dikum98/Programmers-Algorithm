// 프로그래머스 Lv1 완전탐색 - 모의고사
function solution(answers) {
  // 학생 1,2,3의 찍기 패턴
  const studentsWay = [
    [1, 2, 3, 4, 5], // 5
    [2, 1, 2, 3, 2, 4, 2, 5], // 8
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 10
  ];
  //     학생들이 찍은거 받아옴
  const studentsAnswer = [[], [], []];
  for (let i = 0; i < 3; i++) {
    studentsAnswer[i] = getStudentsAnswer(
      studentsWay[i],
      studentsAnswer[i],
      answers
    );
  }
  // 학생들이 찍은거랑 정답이랑 비교
  const studentsRank = [];
  for (let i = 0; i < 3; i++) {
    studentsRank.push(compareAnswer(studentsAnswer[i], answers));
  }
  //     가장 많이 맞춘 학생(들) 반환
  return orderRanking(studentsRank);
}

function getStudentsAnswer(student, studentsAnswer, answers) {
  //     정답이 학생 패턴보다 짧은경우
  if (answers.length < student.length) {
    for (let i = 0; i < answers.length; i++) {
      studentsAnswer.push(student[i]);
    }
    return studentsAnswer;
  }
  //     정답이 학생 패턴보다 더 긴 경우
  for (let i = 0; i < Math.floor(answers.length / student.length); i++) {
    studentsAnswer = studentsAnswer.concat(student);
  }
  for (let i = 0; i < answers.length % student.length; i++) {
    studentsAnswer.push(student[i]);
  }
  return studentsAnswer;
}

function compareAnswer(studentsAnswer, answers) {
  return answers.filter((v, i) => v === studentsAnswer[i]).length;
}

function orderRanking(studentsRank) {
  let result = [];
  studentsRank.forEach((v, i, arr) => {
    if (v === Math.max(...arr)) result.push(i + 1);
  });
  console.log(result);
  return result;
}
