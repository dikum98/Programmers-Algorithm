// 프로그래머스 Lv1 - 신규 아이디 추천 (카카오)

function solution(new_id) {
  new_id = new_id.toLowerCase();

  // 알파벳 소문자, 숫자, -, _, .을 제외한 모든 문자를 제거
  const step2 = /[a-z0-9-_.]/g;
  new_id = new_id.match(step2).join('');

  // 연속된 .을 하나의 .로 치환
  new_id = new_id.replace(/[.]+/g, '.');

  if (new_id[new_id.length - 1] === '.')
    new_id = new_id.slice(0, new_id.length - 1);

  if (new_id[0] === '.') new_id = new_id.slice(1);

  if (!new_id) new_id = 'a';

  if (new_id.length >= 16) new_id = new_id.slice(0, 15);

  if (new_id[new_id.length - 1] === '.')
    new_id = new_id.slice(0, new_id.length - 1);

  if (new_id.length <= 2) {
    while (new_id.length < 3) {
      new_id = new_id.concat(new_id[new_id.length - 1]);
    }
  }

  return new_id;
}
