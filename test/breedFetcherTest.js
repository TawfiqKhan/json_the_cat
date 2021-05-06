const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require("chai");

describe("#fetchBreedDescription", () => {
  it("Returns description of the breed if a matching breed is found", (done) => {
    fetchBreedDescription("Egyptian", (err, desc) => {
      // Expects No Error;
      assert.equal(err, null)

      const expectedDesc = "The Egyptian Mau is gentle and reserved. She loves her people and desires attention and affection from them but is wary of others. Early, continuing socialization is essential with this sensitive and sometimes shy cat, especially if you plan to show or travel with her. Otherwise, she can be easily startled by unexpected noises or events.";
      // compare returned description
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });

  it("Returns Error Message if no matching breed is found", (done) => {
    fetchBreedDescription("Kangaroo", (err, desc) => {
      // Expects No Error;
      assert.equal(desc, null)

      const expectedErrorMsg = "Could not Find your Breed!, Try a different one.";
      // compare returned description
      assert.equal(expectedErrorMsg, err);
      done();
    });
  });
});
