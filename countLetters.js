function countLetters(inputString) {
  var noSpaces = inputString.split(" ").join("").toLowerCase();
  var newArray = noSpaces.split("");
  var getKeys = {};
for (value of newArray) {
  if (getKeys[value]) {
    getKeys[value] +=  1;
  }
  else {
    getKeys[value] = 1;
  }
}
return getKeys;
}
console.log(countLetters("lighthouse in the house"));