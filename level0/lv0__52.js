// 프로그래머스 Lv0 - 인덱스 바꾸기

// function solution(my_string, num1, num2) {
//   let temp = "";

//   for (let i = 0; i < my_string.length; i++) {
//     if (i === num1) temp += my_string[num2];
//     else if (i === num2) temp += my_string[num1];
//     else temp += my_string[i];
//   }

//   return temp;
// }

function solution(my_string, num1, num2) {
  const temp = my_string.split("");
  [temp[num1], temp[num2]] = [temp[num2], temp[num1]];

  return temp.join("");
}
