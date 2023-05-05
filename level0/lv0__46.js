// 프로그래머스 Lv0 - 암호 해독

function solution(cipher, code) {
  let password = "";

  for (let i = 0; i < cipher.length; i++) {
    if ((i + 1) % code === 0) password += cipher[i];
  }

  return password;
}
