// 프로그래머스 Level0 - 2차원으로 만들기

// function solution(num_list, n) {
//   const answer = [[]];

//   num_list.forEach(num => {
//     if (answer.at(-1).length < n) answer.at(-1).push(num);
//     else {
//       answer.push([]);
//       answer.at(-1).push(num);
//     }
//   });

//   return answer;
// }

// function solution(num_list, n) {
//   const answer = [];

//   while(num_list.length > 0) {
//     answer.push(num_list.splice(0, n));
//   }

//   return answer;
// }

function solution(num_list, n) {
  return num_list.reduce((acc, cur, i) => {
    if (i % n === 0) acc.push([]);
    acc.at(-1).push(cur);

    return acc;
  } , []);
}
