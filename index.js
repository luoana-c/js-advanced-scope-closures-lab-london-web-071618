function produceDrivingRange(blockRange) {
  return function (blockOne, blockTwo) {
    blockOneN = blockOne.substring(0, 2)
    if ((blockTwo.substring(0, 2) - blockOne.substring(0, 2)) > blockRange) {
      return 
    }
  }
}