const { describe, it } = require("node:test");
const assert = require("node:assert");
const { countriesWithAnimalsContainingRY } = require("./mock");
const count = require("../lib/count");

describe("Count", () => {
  describe("countries and people with children", () => {
    it("should update countries and people names adding child length", () => {
      const updatedCountries = count(countriesWithAnimalsContainingRY);
      assert.equal(updatedCountries[0].name, "USA [2]");
      assert.equal(updatedCountries[0].people[0].name, "John [4]");
      assert.equal(updatedCountries[0].people[1].name, "Jane [1]");
      assert.equal(updatedCountries[1].name, "Canada [1]");
      assert.equal(updatedCountries[1].people[0].name, "Pamela [2]");
      assert.equal(updatedCountries[2].name, "Mexico [1]");
      assert.equal(updatedCountries[2].people[0].name, "Luis [2]");
    });
  });
});
