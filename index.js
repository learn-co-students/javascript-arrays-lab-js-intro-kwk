const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}


function appendKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"];
 kittens = [...kittens, name]; return kittens;
}

function prependKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"];
 kittens = [name,...kittens]; return kittens;
}



function removeLastKitten() {
var kittens = ["Milo", "Otis", "Garfield"];
kittens.slice(0, kittens.length - 1); return kittens=kittens.slice(0, kittens.length - 1)
}


function removeFirstKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.slice(1); return kittens=kittens.slice(1)
}
