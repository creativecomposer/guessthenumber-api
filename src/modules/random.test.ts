import { getRandomInt } from "./random";

describe("Random target generator", function () {
  it("should generate number within the given range", function () {
    const min = 1;
    const max = 10;
    const target = getRandomInt(min, max);

    expect(target >= min && target <= max).toBe(true);
  });
});
