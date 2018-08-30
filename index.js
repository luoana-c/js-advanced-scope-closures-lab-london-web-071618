function produceDrivingRange(blockRange) {
  return function (blockOne, blockTwo) {
    const blockDiff = blockTwo.substring(0, 2) - blockOne.substring(0, 2)
    console.log(blockTwo.substring(0, 2))
    console.log(blockDiff)
    if (blockDiff > blockRange) {
      return `${blockDiff - blockRange} blocks out of range`
    }
    else {
      return `within range by ${blockRange - blockDiff}`
    }
  }
}

