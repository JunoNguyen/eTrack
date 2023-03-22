const MAX_SHIFT_TIME = // Shift cannot be longer than 8.5hrs
  1000 * 60 * 60 * 8 + // 8hrs
  1000 * 60 * 30; // 30min

const MIN_SHIFT_TIME = 1000 * 60 * 60 * 4; // 4h

function isValidShift(startTime, endTime) {
  const diff = endTime.getTime() - startTime.getTime();
  // Check if start time is before end time
  if (diff < 0 || diff > MAX_SHIFT_TIME || diff < MIN_SHIFT_TIME) {
    return false;
  }
  return true;
}

module.exports = { isValidShift };
