fetch('/input2.txt')
  .then((r) => r.text())
  .then((data) => {
    const dataArr = data.trim().split('\n');
    let safeNum = 0;
    const isSafeArray = (arr) => {
      let direction = null;
      for (let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i + 1] - arr[i];
        if (diff === 0 || Math.abs(diff) < 1 || Math.abs(diff) > 3) {
          return false;
        }
        const currentDirection = diff > 0 ? 1 : -1;
        if (direction === null) {
          direction = currentDirection;
        } else if (currentDirection !== direction) {
          return false;
        }
      }
      return true;
    };

    dataArr.forEach((element) => {
      const elArr = element.trim().split(' ').map(Number);
      let safeVal = isSafeArray(elArr);

      if (!safeVal) {
        for (let i = 0; i < elArr.length; i++) {
          const newElArr = [...elArr.slice(0, i), ...elArr.slice(i + 1)];
          if (isSafeArray(newElArr)) {
            safeVal = true;
            break;
          }
        }
      }

      if (safeVal) {
        safeNum++;
      }
    });

    console.log('Safe reports are:', safeNum);
  });
