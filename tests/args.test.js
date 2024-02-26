const { describe, it } = require("node:test");
const assert = require("node:assert");
const { hasArgument, getArgumentValue } = require("../lib/args");

describe("Arguments", () => {
  describe("hasArgument()", () => {
    it("should return true if argument was passed", () => {
      process.argv.push("--firstTest=my_first_test");
      assert.equal(hasArgument("firstTest"), true);
    });

    it("should return false if argument was not passed", () => {
      assert.equal(hasArgument("secondTest"), false);
    });
  });

  describe("getArgumentValue()", () => {
    it("should return argument value", () => {
      process.argv.push("--thirdTest=my_third_test");
      assert.equal(getArgumentValue("thirdTest"), "my_third_test");
    });
  });
});
