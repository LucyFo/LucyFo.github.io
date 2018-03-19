const sequenceSum = (begin, end) => {
  // BEGIN (write your solution here)
  if (begin > end) {
    return NaN;
  }
  else if (begin === end) {
    return end;
  }
  else (begin < end) {
    return begin + sequenceSum(begin + 1, end);
  }

  // END
};

export default sequenceSum;
