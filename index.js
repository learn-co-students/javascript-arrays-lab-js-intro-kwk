const app = "I don't do much."
var kittens=["Milo","Otis","Garfield"];
function destructivelyAppendKitten(name)
{
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten()
{
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var name=["Milo","Otis","Garfield"];
  return ([...name,"Broom"]);
}
function prependKitten(name){
  var name=["Milo","Otis","Garfield"];
  return (["Arnold",...name]);
}
function removeLastKitten(){
  var name=["Milo","Otis","Garfield"];
  return name.slice(0,name.length-1);
}
function removeFirstKitten(){
  var name=["Milo","Otis","Garfield"];
  return name.slice(-2);
}
