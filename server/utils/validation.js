const validShift = (shift) => /\b\d{1,2}:\d{2} [AP]M - \d{1,2}:\d{2} [AP]M\b/.test(shift);


module.exports = validShift;