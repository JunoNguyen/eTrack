const { isValidShift } = require("./validation");

const validStart = new Date(1672531200000); // Jan 1, 2023 00:00:00
const notLongEnough = new Date(167253120001); // Jan 1, 2023 00:00:00:001
const validEnd = new Date(1672561800000); // Jan 1, 2023 8:30:00
const tooLong = new Date(1672561800001); // Jan 1, 2023 8:30:00:001

describe("It correctly validates time ranges", () => {
  it("Validates shift start and end times", () => {
    expect(isValidShift(validStart, validEnd));
    expect(!isValidShift(validStart, tooLong));
    expect(!isValidShift(validStart, notLongEnough));
  });
});
