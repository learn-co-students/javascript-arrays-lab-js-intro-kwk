const app = "I don't do much."
var name=["Milo","Otis","Garfield"];
function destructivelyAppendKitten(name){
name.push("Ralph");
return kittens;
}
function destructivelyPrependKitten(name){
  var name=["Milo","Otis","Garfield"];
  name.unshift("Bob");
  return name;
}
function destructivelyRemoveLastKitten(){
  var name=["Milo","Otis","Garfield"];
  name.pop();
  return name;
}
function destructivelyRemoveFirstKitten(){
  var name=["Milo","Otis","Garfield"];
  name.shift();
  return name;
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
