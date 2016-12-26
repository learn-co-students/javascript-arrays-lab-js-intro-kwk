var kittens = ["Milo", "Otis", "Garfield"];

// First Function
function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens
}


// Second Function
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
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
  return [...kittens, "Broom"];
}


// Sixth Function
function prependKitten(name) {
  return ["Arnold", ...kittens];
}


// Seventh Function
function removeLastKitten() {
  return kittens.slice(0, kittens.length -1);
}


// Eighth Function
function removeFirstKitten() {
  return kittens.slice(1);
}
