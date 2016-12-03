function rgb(r, g, b){
  var rgbValues = [r, g, b];
  var valueCheck = rgbValues.map(function(color){
    if (color > 255){
      return 255;
    }
    else if (color < 0){
      return 0;
    }
    return color;
  });
  return valueCheck.map(function(value){
    if(value.toString(16).length === 1){
      return 0 + value.toString(16);
    }
    return value.toString(16);
  }).join("").toUpperCase();
}
console.log(rgb(148, 0, 211));

//--TEST--
describe("Solution", function(){
  it("tests if rgb(0, 0, 0) returns 000000", function(){
    Test.assertEquals(rgb(0,0,0), "000000", "wrong");
  });
  it("tests if rgb(255, 255, 300) is rounded and returns FFFFFF", function(){
    Test.assertEquals(rgb(255, 255, 300), "FFFFFF", "wrong");
  });
  it("tests if rgb(255, 255, 255) returns FFFFFF", function(){
    Test.assertEquals(rgb(255, 255, 255), "FFFFFF", "wrong");
  });
  it("tests if rgb(148, 0, 211) returns 9400D3", function(){
    Test.assertEquals(rgb(148, 0, 211), "9400D3", "wrong");
  });
});
