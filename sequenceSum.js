const sequenceSum = (begin, end) => {
    if (begin > end) {
    return NaN;
  }
  else if (begin === end) {
    return end;
  }
  else (begin < end) {
    return begin + sequenceSum(begin + 1, end);
  }

  };

