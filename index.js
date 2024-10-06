
var n = document.querySelectorAll(".drum").length;


for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var wh=this.innerHTML;
        animation(wh);
        
        switch (wh) {
            case "w":
             var audio = new Audio("sounds/crash.mp3");
             audio.play();
            break;
            case "a":
             var audio1 = new Audio("sounds/kick-bass.mp3");
             audio1.play();
            break;
            case "s":
             var audio2 = new Audio("sounds/snare.mp3");
             audio2.play();
            break;
            case "d":
             var audio3 = new Audio("sounds/tom-1.mp3");
             audio3.play();
            break;
            case "j":
             var audio4 = new Audio("sounds/tom-2.mp3");
             audio4.play();
             break;
            case "k":
             var audio5 = new Audio("sounds/tom-3.mp3");
             audio5.play();
             break;
            case "l":
             var audio6 = new Audio("sounds/tom-4.mp3");
             audio6.play();
             break;
        
            default:
                console.log(wh);
                break;
        }
    });
}
document.addEventListener("keydown",function(event){
    var sat=event.key;
    animation(sat);
    switch (sat) {
        case "w":
         var audio = new Audio("sounds/crash.mp3");
         audio.play();
        break;
        case "a":
         var audio1 = new Audio("sounds/kick-bass.mp3");
         audio1.play();
        break;
        case "s":
         var audio2 = new Audio("sounds/snare.mp3");
         audio2.play();
        break;
        case "d":
         var audio3 = new Audio("sounds/tom-1.mp3");
         audio3.play();
        break;
        case "j":
         var audio4 = new Audio("sounds/tom-2.mp3");
         audio4.play();
         break;
        case "k":
         var audio5 = new Audio("sounds/tom-3.mp3");
         audio5.play();
         break;
        case "l":
         var audio6 = new Audio("sounds/tom-4.mp3");
         audio6.play();
         break;
    
        default:
            console.log(wh);
            break;
    }

});
function animation(current){
   var active= document.querySelector("."+current);
   active.classList.add("pressed");
   setTimeout(function() {
    active.classList.remove("pressed");
    
   },100);
}
