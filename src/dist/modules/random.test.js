"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var random_1 = require("./random");
describe("Random target generator", function () {
    it("should generate number within the given range", function () {
        var min = 1;
        var max = 10;
        var target = (0, random_1.getRandomInt)(min, max);
        expect(target >= min && target <= max).toBe(true);
    });
});
//# sourceMappingURL=random.test.js.map