var expect = require("chai").expect;
var {hyphenate} = require("../app/hyphenate");
describe("Hyphenation tests", function() {
    it("Hyphenates kauniainen", function() {
        expect("kau-ni-ai-nen").to.equal(hyphenate("kauniainen"));
    });
});
