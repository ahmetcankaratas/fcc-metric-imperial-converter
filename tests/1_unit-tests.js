/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

var chai = require("chai");
var assert = chai.assert;
var ConvertHandler = require("../controllers/convertHandler.js");

var convertHandler = new ConvertHandler();

suite("Unit Tests", function() {
  suite("Function convertHandler.getNum(input)", function() {
    test("Whole number input", function(done) {
      var input = "32L";
      assert.equal(
        convertHandler.getNum(input),
        32, "Whole number input failed");
      done();
    });

    test("Decimal Input", function(done) {
      var input = "3.5KM";
      assert.equal(convertHandler.getNum(input), 3.5, "Decimal input failed");
      done();
    });

    test("Fractional Input", function(done) {
      var input = "4/2KM";
      assert.equal(convertHandler.getNum(input), 2);
      done();
    });

    test("Fractional Input w/ Decimal", function(done) {
      var input = "4.2/2";
      assert.equal(convertHandler.getNum(input), 2.1)
      done();
    });

    test("Invalid Input (double fraction)", function(done) {
      var input = "2//1";
      assert.equal(convertHandler.isHave(input), false)
      done();
    });

    test("No Numerical Input", function(done) {
      var input ="a1km";
      assert.equal(convertHandler.getNum(input), false)
      done();
    });
  });

  suite("Function convertHandler.getUnit(input)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      var input = [
        "gal",
        "l",
        "mi",
        "km",
        "lbs",
        "kg",
        "GAL",
        "L",
        "MI",
        "KM",
        "LBS",
        "KG"
      ];
      input.forEach(function(ele) {
        assert.notEqual(convertHandler.getUnit(ele), false)
      });
      done();
    });

    test("Unknown Unit Input", function(done) {
        var input = "120kma"
        assert.equal(convertHandler.getUnit(input), false)
        done();
    });
  });

  suite("Function convertHandler.getReturnUnit(initUnit)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      var input = ["gal", "l", "mi", "km", "lbs", "kg"];
      var expect = ["l", "gal", "km", "mi", "kg", "lbs"];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.spellOutUnit(unit)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      var input = ["gal", "l", "mi", "km", "lbs", "kg"];
      var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele,i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      })
      done();
    });
  });

  suite("Function convertHandler.convert(num, unit)", function() {
    test("Gal to L", function(done) {
      var input = [5, "gal"];
      var expected = 18.92705;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1,
      )
      ; //0.1 tolerance
      done();
    });

    test("L to Gal", function(done) {
      var input = [18.9271, "l"];
      var expected = 5;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("Mi to Km", function(done) {
      var input = [3, "mi"];
      var expected = 4.82802
     assert.approximately(
      convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test("Km to Mi", function(done) {
      var input = [1, "km"];
      var expected = 0.62137
     assert.approximately(
      convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test("Lbs to Kg", function(done) {
      var input = [5, "lbs"];
      var expected = 2.26796
     assert.approximately(
      convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test("Kg to Lbs", function(done) {
      var input = [5, "kg"];
      var expected = 11.02312
     assert.approximately(
      convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
  });
});
