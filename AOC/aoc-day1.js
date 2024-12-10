const leftArr = []
const rightArr = []


fetch('/input.txt')
.then(r => r.text())
.then(data => {
  data.split('\n').forEach(element => {
    const [left, right] = element.split(/\s+/).map(Number)

    leftArr.push(parseInt(left))

    rightArr.push(parseInt(right))
  });
  leftArr.sort((a, b) => a - b);
  console.log(leftArr);

  rightArr.sort((a, b) => a - b);

  let totalDif = []
  for (let i = 0; i < leftArr.length; i++) {
    totalDif += Math.abs(parseInt(leftArr[i]) - parseInt(rightArr[i]));
  }
  console.log("the total difference is: ", totalDif);
})
