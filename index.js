const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten(name) {

  var tempKittens = kittens
  tempKittens = [...tempKittens, name]
  return tempKittens
}
function prependKitten(name) {

  var tempKittens = kittens
  tempKittens = [name, ...tempKittens]
  return tempKittens
}

function removeLastKitten() {
  var tempKittens = kittens
  tempKittens = tempKittens.slice(0, tempKittens.length - 1)
  return tempKittens
}
function removeFirstKitten() {
  var tempKittens = kittens
  tempKittens = tempKittens.slice(1)
  return tempKittens
}
