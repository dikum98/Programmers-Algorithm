// 프로그래머스 Level0 - 중복된 문자 제거

function solution(my_string) {
  let temp = '';

  for (let i = 0; i < my_string.length; i++) {
    if (!(temp.includes(my_string[i]))) temp += my_string[i];
  }

  return temp;
}