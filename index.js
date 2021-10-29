//Dectecting button press

var numButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var btnInnerHtml = this.innerHTML;//the text that was written
    sound(btnInnerHtml);// then is goes to sound() and what ever button you clicked the case with that letter will sound off
buttonAnimation(btnInnerHtml);

  });
}
//detecting keyboard press

document.addEventListener("keypress", function(event) {//the event what  you are doing, so pressing the key is the even and thats why it is named keypress

  sound(event.key);//when you click on the key it will check if it is an assigned key in the switch and make the desinated sounds

buttonAnimation(event.key);
});

function sound(key) {
  switch (key) {
    case "w":
      var crash1 = new Audio('sounds/crash.mp3');
      crash1.play();

      break;
    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();

      break;
    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();

      break;
    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();

      break;
    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();

      break;
    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();

      break;
    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();

      break;
    default:console.log(btnInnerHtml);

  }
}
function buttonAnimation(currentKey){
var activeButton=  document.querySelector("." + currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){ activeButton.classList.remove("pressed");},100);

}
