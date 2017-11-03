var taxi = new Taxi();


taxi.forward();



var light = taxi.closestTrafficLight();

var key = new KeyPress();

var body = document.querySelector("body");
body.onkeydown = function(e){
console.log(e.keyCode);

if(e.keyCode === 39){
  var light = taxi.closestTrafficLight();
  if(light.currentColor() !== "red"){
  taxi.forward();
 }
}

if(e.keyCode === 37){
  var light = taxi.closestTrafficLight();
  if(light.currentColor() !== "red"){
  taxi.reverse();
}

}
if(e.keyCode === 38){
  var light = taxi.closestTrafficLight();
  if(light.currentColor() == "green"){
    light.makeOrange();
  }else if (light.currentColor() == "orange") {
      light.makeRed();
  }else{
   light.makeGreen();
  }

}

if(e.keyCode === 40){
    var light = taxi.closestTrafficLight();
    if(light.currentColor() == "red"){
      light.makeGreen();
    }else if (light.currentColor() == "green") {
        light.makeOrange();
    }else{
     light.makeRed();
    }
}
}
