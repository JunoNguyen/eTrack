function isValidShift(startTime, endTime) {
  if (startTime.getTime() >= endTime.getTime()) {
    return false;
  }
  return true;
}

module.exports = { isValidShift };
