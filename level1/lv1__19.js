// 프로그래머스 lv1 - 키패드 누르기 (카카오)

const distanceCheck = (leftThumb, rightThumb, number, hand) => {
  let [leftDistance, rightDistance] = [null, null];
  if (leftThumb % 3 === 2) {
    leftDistance = Math.abs(leftThumb - number) / 3;
  } else {
    leftDistance =
      Math.floor(Math.abs(leftThumb - number) / 3) +
      (Math.abs(leftThumb - number) % 3);
  }

  if (rightThumb % 3 === 2) {
    rightDistance = Math.abs(rightThumb - number) / 3;
  } else {
    rightDistance =
      Math.floor(Math.abs(rightThumb - number) / 3) +
      (Math.abs(rightThumb - number) % 3);
  }

  if (leftDistance === rightDistance) {
    if (hand === 'right') {
      return {
        leftThumb: leftThumb,
        rightThumb: number,
        touchedHand: 'R',
      };
    } else {
      return {
        leftThumb: number,
        rightThumb: rightThumb,
        touchedHand: 'L',
      };
    }
  } else if (leftDistance > rightDistance) {
    return {
      leftThumb: leftThumb,
      rightThumb: number,
      touchedHand: 'R',
    };
  } else {
    return {
      leftThumb: number,
      rightThumb: rightThumb,
      touchedHand: 'L',
    };
  }
};

function solution(numbers, hand) {
  let [leftThumb, rightThumb] = [10, 12];

  return numbers.reduce((result, number) => {
    if (number === 0) number = 11;
    if ([1, 4, 7].includes(number)) {
      leftThumb = number;
      return result + 'L';
    } else if ([3, 6, 9].includes(number)) {
      rightThumb = number;
      return result + 'R';
    } else {
      let touchedHand = '';
      ({ leftThumb, rightThumb, touchedHand } = distanceCheck(
        leftThumb,
        rightThumb,
        number,
        hand
      ));
      return result + touchedHand;
    }
  }, '');
}
