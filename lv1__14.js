// 프로그래머스 Lv1 - 비밀지도 (카카오)

function solution(n, arr1, arr2) {
  let totalMap = []

  // 각 자릿수를 이진수로 바꿈
  for (let i = 0; i < n; i++) {
    arr1[i] = arr1[i].toString(2).padStart(n, '0')
    arr2[i] = arr2[i].toString(2).padStart(n, '0')
  }

  // 두 지도를 합함
  for (let i = 0; i < n; i++) {
    let temp = ''
    for (let j = 0; j < n; j++) {
      temp += arr1[i][j] | arr2[i][j]
    }
    totalMap[i] = temp
  }

  // 합한 지도에서 0은 ' ', 1은 '#'로 변경
  for (let i = 0; i < n; i++) {
    let temp = ''
    for (let j = 0; j < n; j++) {
      if (totalMap[i][j] === '1') temp += '#'
      else temp += ' '
    }
    totalMap[i] = temp
  }

  return totalMap
}
