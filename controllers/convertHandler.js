/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
    
  this.isHave = function(input){
    var doubleFrac = /\/\//
    var isHave = input.match(doubleFrac)
    if(isHave !== null){
      return false
    } else {
      return true
    }
    }
  
  this.getNum = function(input) {
    //Franction somewhere
    var frac = /\//g
    var count = [];
    var isHave = input.match(frac)
    if(isHave !== null){
      isHave.forEach(data => count.push(data))
    }
    //valid numbers
    var regex = /[^0-9.,\/]/g
    var math = /[0-9.,\/]/g
    var getFirst = /(?:(?![glkmGLKM]).)*/
    var result;
    if(input.match(/[0-9]/g) === null){
      result = 1
    } else {
      result = eval(input.match(math).join(""))
    }
    //return until but and including
    var x = input.match(getFirst).join("")
    //lookup if anything wrong
    var lookup = x.match(regex)
    //logic
      if(lookup === null && count.length < 2){
      return result
    } else {
      return false
    }
  };
  
  this.getUnit = function(input) {
    var unit = input.match(/[a-z]/gi).join("").toLowerCase()
    var lookup = ['gal','l','mi','km','lbs','kg'];
    var result;
    
    if(lookup.indexOf(unit) >= 0){
      result = unit
    } else {
      result = false
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['l','gal','km','mi','kg','lbs'];
    var result = expect[input.indexOf(initUnit)]
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch(unit.toLowerCase()) {
      case "gal":
        result = "gallons";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "mi":
        result = "miles";
        break;
      case "l":
        result = "liters";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "km":
        result = "kilometers";
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result ;
    
    if(initUnit === "mi"){
      result = (initNum * miToKm).toFixed(5)
    } else if(initUnit === "lbs"){
      result = (initNum * lbsToKg).toFixed(5)
    } else if(initUnit === "gal"){
      result = (initNum * galToL).toFixed(5)
    } else if(initUnit === "km"){
      result = (initNum / miToKm).toFixed(5)
    } else if(initUnit === "l"){
      result = (initNum / galToL).toFixed(5)
    } else if(initUnit === "kg"){
      result = (initNum / lbsToKg).toFixed(5)
    } else {
      result = 0
    }
    result = eval(result)
    return result
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit, isHave) {
    var result;
    result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
    if(!isHave || !initNum){
      return `Error`
    }else {
      return result
    }
  };
  
}

module.exports = ConvertHandler;
