// 프로그래머스 lv2 - [3차] 파일명 정렬 (카카오)

function solution(files) {
  const charPattern = /[a-zA-Z]/;
  const numPattern = /[0-9]/;
  // 1. HEAD 정렬
  files.sort((a, b) => {
    // 반환값이 음수면 a를 우선, 양수면 b를 우선, 0이면 그대로 정렬
    let i = 0;
    let aHeadIdx = null;
    let bHeadIdx = null;
    while (true) {
      if (!charPattern.test(a[i++])) {
        aHeadIdx = i - 1;
        i = 0;
        break;
      }
    }

    while (true) {
      if (!charPattern.test(a[i++])) {
        bHeadIdx = i - 1;
        break;
      }
    }
    console.log(a.slice(0, aHeadIdx), b.slice(0, bHeadIdx));
    return a.slice(0, aHeadIdx) - b.slice(0, bHeadIdx);
  });
  // 2. NUMBER 정렬
  // 3. TAIL 정렬

  return files;
}
