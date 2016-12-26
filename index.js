var kittens = ["Milo", "Otis", "Garfield"];

// First Function
function destructivelyAppendKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.push("kitty");
  return kittens
}
destructivelyAppendKitten();

// Second Function
function destructivelyPrependKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.unshift("kitty");
  return kittens
}
destructivelyPrependKitten();

// Third Function
function destructivelyRemoveLastKitten(){
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.pop(1);
return kittens
}
destructivelyRemoveLastKitten();

// Fourth Function
function destructivelyRemoveFirstKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.shift();
  return kittens
}
destructivelyRemoveFirstKitten();

// Fifth Function
function appendKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"];
  newArray = [...kittens, "kitty"];
  return newArray
}
appendKitten();

// Sixth Function
function prependKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"];
  newArray = ["kitty", ...kittens];
  return newArray
}
prependKitten();

// Seventh Function
function removeLastKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  newArray = kittens.slice(0, kittens.length -1);
  return newArray
}
removeLastKitten();

// Eighth Function
function removeFirstKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  newArray = kittens.slice(1);
  return newArray
}
removeFirstKitten(); 
