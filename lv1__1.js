// 프로그래머스 Lv1. 문자열 내 p와 y의 개수

// 1. filter 사용 => 0.1ms
function solution(s) {
  const pCount = s.split("").filter((v) => v === "p" || v === "P").length;
  const yCount = s.split("").filter((v) => v === "y" || v === "Y").length;
  return pCount === yCount;
}

// 2. map + if문 사용 => 3~4ms
function solution(s) {
  let pCount = 0;
  let yCount = 0;
  console.log(pCount, yCount);
  s.split("").forEach((v) => {
    if (v === "p" || v === "P") pCount++;
    if (v === "y" || v === "Y") yCount++;
  });
  return pCount === yCount;
}

// 3. for문 + if문 사용 => filter보다 조금 더 빠름
function solution(s) {
  let pCount = 0;
  let yCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") pCount++;
    if (s[i] === "y" || s[i] === "Y") yCount++;
  }
  return pCount === yCount;
}
