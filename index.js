const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(a) {
  kittens.push(a)
  return kittens
}

function destructivelyPrependKitten(b) {
  kittens.unshift(b)
  return kittens
}
function destructivelyRemoveLastKitten(c) {
  kittens.pop(c)
  return kittens
}
function destructivelyRemoveFirstKitten(d) {
  kittens.shift(d)
  return kittens
}
function appendKitten(e) {
  return [...kittens,e]
}
function prependKitten(f) {
  return [f,...kittens]
}
function removeLastKitten(g) {
  return kittens.slice(0,kittens.length-1)
}
function removeFirstKitten(h) {
  return kittens.slice(1)
}