const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  return [...kittens, name]
}
function prependKitten(name){
  return [name,...kittens]
}
function removeLastKitten(){
  var kitCopy=kittens.slice()
  kitCopy.pop()
  return kitCopy
}
function removeFirstKitten(){
  var kitCopy=kittens.slice()
  kitCopy.shift()
  return kitCopy
}
