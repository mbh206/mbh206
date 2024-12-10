fetch('/input3.txt')
.then(r => r.text())
.then(data => {
  const mulArr = []
  const disabledMuls = data.trim().replace(/(?<=don't\(\))(.*?)(?=do\(\))/gm, "")
  const enabledMuls = disabledMuls.match(/mul\(([0-9]+),([0-9]+)\)/gm)
  const mulData = data.match(/mul\(([0-9]+),([0-9]+)\)/gm)
  const mul = (a,b) => a * b
  let sum = 0
  enabledMuls.forEach((mull) => {
    const mulNums = mull.replace(/[^\d,]/g, '');
    const nums = mulNums.split(",").map(Number);
    const totalMul = mul(nums[0], nums[1])
    // console.log(totalMul);

    mulArr.push(totalMul);
  })
  for (let i = 0; i < mulArr.length; i++) {
    sum += mulArr[i]
  }
  console.log("The total sum is:", sum);
})
