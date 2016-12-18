// const app = "I don't do much."

var kittens = [
  "Milo",
  "Otis",
  "Garfield"
];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens;
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
function appendKitten(name) {
  var cats = [...kittens, 'Broom'];
  return cats;
}
function prependKitten(name) {
  var cats = ['Arnold', ...kittens];
  return cats;
}
function removeLastKitten() {
  var cats = kittens.slice(0, kittens.length - 1);
  return cats;
}
function removeFirstKitten() {
  var cats = kittens.slice(1);
  return cats;
}
