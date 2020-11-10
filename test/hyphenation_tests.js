let expect = require("chai").expect;
let {hyphenate} = require("../app/hyphenate");
describe("Hyphenation tests", function() {
    it("Hyphenates auto", function() {
        let hyphenated_word_arr = hyphenate("auto");
        expect(hyphenated_word_arr.length).equals(2);
        expect(hyphenated_word_arr[0]).equals("au");
        expect(hyphenated_word_arr[1]).equals("to");
    });

    it("Hyphenates porkkana", function() {
        let hyphenated_word_arr = hyphenate("porkkana");
        expect(hyphenated_word_arr.length).equals(3);
        expect(hyphenated_word_arr[0]).equals("pork");
        expect(hyphenated_word_arr[1]).equals("ka");
        expect(hyphenated_word_arr[2]).equals("na");
    });

    it("Hyphenates kauniainen", function() {
        let hyphenated_word_arr = hyphenate("kauniainen");
        expect(hyphenated_word_arr.length).equals(4);
        expect(hyphenated_word_arr[0]).equals("kau");
        expect(hyphenated_word_arr[1]).equals("ni");
        expect(hyphenated_word_arr[2]).equals("ai");
        expect(hyphenated_word_arr[3]).equals("nen");
    });

    it("Hyphenates valtionyhtiö", function() {
        let hyphenated_word_arr = hyphenate("valtionyhtiö");
        expect(hyphenated_word_arr.length).equals(6);
        expect(hyphenated_word_arr[0]).equals("val");
        expect(hyphenated_word_arr[1]).equals("ti");
        expect(hyphenated_word_arr[2]).equals("on");
        expect(hyphenated_word_arr[3]).equals("yh");
        expect(hyphenated_word_arr[4]).equals("ti");
        expect(hyphenated_word_arr[5]).equals("ö");
    });
});
