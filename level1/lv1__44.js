// 프로그래머스 Lv1 - 덧칠하기

const solution = (n, m, section) => {
  let count = 0;
  /** 어디부터 칠해야 하는지 */
  let now = 0;

  section.forEach((wall) => {
    if (wall < now) return;
    now = wall + m;
    count += 1;
  });

  return count;
};

/** 시간초과 */
// const solution = (n, m, section) => {
//   /** 덧칠할 벽 */
//   const wall = Array(n).fill(true);
//   /** 총 칠한 횟수 */
//   let count = 0;
//   /** 한 번에 칠할 수 있는 최대량 */
//   let paintMax = 0;
//   /** 칠하기 시작할 벽 번호 */
//   let start = 0;
//   /** 칠해야 할 영역에 false를 할당  */
//   section.forEach((v) => (wall[v - 1] = false));
//   /** 롤러 */
//   let roller = Array(m).fill(false);

//   /** 벽이 다 칠해질 때까지 반복 */
//   while (wall.includes(false)) {
//     const from = wall.indexOf(false);
//     const end = wall.lastIndexOf(false);

//     /** 덧칠할 첫 벽부터 마지막 벽 까지 순회하면서 가장 많이 칠할 수 있는 시작점 찾기 */
//     for (let i = from; i <= end; i++) {
//       let temp = wall.slice(i, i + m).filter((v) => !v).length;

//       if (temp > paintMax) {
//         paintMax = temp;
//         start = i;
//       }
//     }

//     /** 덧칠 1회 */
//     for (let i = start; i < start + m; i++) {
//       wall[i] = true;
//     }
//     paintMax = 0;
//     start = 0;
//     count++;
//   }

//   return count;
// };
