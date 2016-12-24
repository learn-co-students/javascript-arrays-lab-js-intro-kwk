window.kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  window.kittens.push(name)
  var name = 'Ralp'
  return window.kittens
}

function destructivelyPrependKitten(name) {
  window.kittens.unshift(name)
  var name = 'Bob'
  return window.kittens
}

function destructivelyRemoveLastKitten() {
  window.kittens.pop()
  return window.kittens
}

function destructivelyRemoveFirstKitten() {
  window.kittens.shift()
  return window.kittens
}

function appendKitten(name) {
  var newarray = [];
  newarray = window.kittens.concat()
  newarray.push(name)
  var name = 'Broom'
  return newarray
}

function prependKitten(name) {
  var newarray = [];
  newarray = window.kittens.concat()
  newarray.unshift(name)
  var name = 'Arnold'
  return newarray
}

function removeLastKitten() {
  var newarray = [];
  newarray = window.kittens.concat()
  newarray.pop()
  return newarray
}

function removeFirstKitten() {
  var newarray = [];
  newarray = window.kittens.concat()
  newarray.shift()
  return newarray
}
