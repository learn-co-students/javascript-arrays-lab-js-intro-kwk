const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
   kittens.push(name)
   return kittens
} // destructivelyAppendKitten

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
} // destructivelyPrependKitten

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
} // destructivelyRemoveLastKitten

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
} // destructivelyRemoveFirstKitten

function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
} // appendKitten

function prependKitten(name) {
  var newKittens = [name, ...kittens]
  return newKittens
} // prependKitten

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length-1)
} // removeFirstKitten

function removeFirstKitten(name) {
  return kittens.slice(1)
} // removeFirstKitten
