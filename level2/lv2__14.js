// 프로그래머스 Lv2 - 기능개발 (스택/큐)

function solution(progresses, speeds) {
  const completedDate = checkCompletedDate(progresses, speeds);
  return publish(completedDate);
}

function checkCompletedDate(progresses, speeds) {
  const completedDate = [];
  let [i, len] = [0, progresses.length];

  while (len--) {
    completedDate[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
    i++;
  }
  console.log('completed Date: ', completedDate);
  return completedDate;
}

function publish(completedDate) {
  const publishCount = [];

  let [i, len] = [0, completedDate.length];

  let count = 0;
  let publishWaitStack = [];

  while (len--) {
    if (publishWaitStack.length === 0 || publishWaitStack[0] >= completedDate[i]) {
      publishWaitStack.push(completedDate[i]);
      i++;
    } else {
      publishCount.push(publishWaitStack.length);
      publishWaitStack = [];
      publishWaitStack.push(completedDate[i]);
      i++;
    }
  }
  publishCount.push(publishWaitStack.length);

  console.log('publish Count: ', publishCount);
  return publishCount;
}