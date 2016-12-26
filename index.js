var kittens = ["Milo", "Otis", "Garfield"];

// First Function
function destructivelyAppendKitten(name) {
  kittens.push("kitty");
  return kittens
}


// Second Function
function destructivelyPrependKitten(name) {
  kittens.unshift("kitty");
  return kittens
}


// Third Function
function destructivelyRemoveLastKitten(){
  kittens.pop(1);
return kittens
}

// Fourth Function
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}


// Fifth Function
function appendKitten(name) {
  newArray = [...kittens, "kitty"];
  return newArray
}


// Sixth Function
function prependKitten(name) {
  newArray = ["kitty", ...kittens];
  return newArray
}


// Seventh Function
function removeLastKitten() {
  newArray = kittens.slice(0, kittens.length -1);
  return newArray
}


// Eighth Function
function removeFirstKitten() {
  newArray = kittens.slice(1);
  return newArray
}
