function positionLetters(inputString) {
  var noSpaces = inputString.split(" ").join("").toLowerCase();
  var newArray = noSpaces.split("");
  var getKeys = {};
  for (var i = 0; i < newArray.length; i++) {
    var keyValue = noSpaces[i];
    if (getKeys[keyValue]) {
      getKeys[keyValue].push(i);
    }
    else {
      getKeys[keyValue] = [i];
    }
  }
return getKeys;
}
console.log(positionLetters("lighthouse in the house"));