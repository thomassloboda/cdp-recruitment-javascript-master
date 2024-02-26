const { describe, it } = require("node:test");
const assert = require("node:assert");
const { countriesWithAnimalsContainingRY } = require("./mock");
const filter = require("../lib/filter");

describe("Filter", () => {
  describe("data have animal matching filter pattern", () => {
    it("should return only animals matching filter pattern", () => {
      assert.equal(filter(countriesWithAnimalsContainingRY, "ry").length, 2);
    });
  });
  describe("data do not have animal matching filter pattern", () => {
    it("should return null if no animals matching filter pattern", () => {
      assert.equal(filter(countriesWithAnimalsContainingRY, "xyz"), null);
    });
  });
});
