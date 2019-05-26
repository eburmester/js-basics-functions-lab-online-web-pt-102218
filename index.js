function distanceFromHqInBlocks (street) {
  if (street >= 42) {
    return street - 42;
  } else {
    return 42 - street;
  }
}
 
function distanceFromHqInFeet (someValue) {
  distanceFromHqInBlocks(someValue);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}
