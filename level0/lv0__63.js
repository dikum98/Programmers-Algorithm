// 프로그래머스 Level0 - 모스부호 (1)

const morse = { 
  '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
  '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
  '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
  '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
  '-.--':'y','--..':'z'
}

// function solution(letter) {
//   return letter.split(' ').map(v => morse.v).join('');
// }

function solution(letter) {
  return letter.split(' ').reduce((acc, cur) => acc + morse[cur], '');
}