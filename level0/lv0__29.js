// 프로그래머스 Lv0 - 문자 반복 출력하기

function solution(my_string, n) {
  let resultStr = "";

  for (let i = 0; i < my_string.length; i++) {
    resultStr += my_string[i].repeat(n);
  }

  return resultStr;
}
