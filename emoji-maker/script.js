let yellowSkin = document.querySelector('#yellow-skin');
let greenSkin = document.querySelector('#green-skin');
let redSkin = document.querySelector('#red-skin');
let eyeNormal = document.querySelector('#eye-normal');
let eyeClosed = document.querySelector('#eye-closed');
let eyeLong = document.querySelector('#eye-long');
let eyeLaughing = document.querySelector('#eye-laughing');
let eyeRolling = document.querySelector('#eye-rolling');
let eyeWinking = document.querySelector('#eye-winking');
let eyesCard = document.querySelector('#select-eyes-card');

yellowSkin.onclick = function () {
    if (document.querySelector('#select-skin-card').style.display = "block") {
    document.querySelector("#select-eyes-card").style.display = "block";
    document.querySelector('#select-skin-card').style.display = "none";
    document.getElementById("skin").src = "./assets/skin/yellow.png";
    }
    else {
    document.querySelector("#select-eyes-card").style.display = "none";
    document.querySelector('#select-skin-card').style.display = "block";
    }
  };

greenSkin.onclick = function () {
    if (document.querySelector('#select-skin-card').style.display = "block") {
        document.querySelector("#select-eyes-card").style.display = "block";
        document.querySelector('#select-skin-card').style.display = "none";
        document.getElementById("skin").src = "./assets/skin/green.png";
    }
     else {
        document.querySelector("#select-eyes-card").style.display = "none";
        document.querySelector('#select-skin-card').style.display = "block";
     }
      };
 redSkin.onclick = function () {
        if (document.querySelector('#select-skin-card').style.display = "block") {
            document.querySelector("#select-eyes-card").style.display = "block";
            document.querySelector('#select-skin-card').style.display = "none";
            document.getElementById("skin").src = "./assets/skin/red.png";
        }
         else {
            document.querySelector("#select-eyes-card").style.display = "none";
            document.querySelector('#select-skin-card').style.display = "block";
         }
          };

        //   arrow back and forward
document.getElementById("show-skin-card").onclick = function (){
        if(document.querySelector("#select-eyes-card").style.display = "block"){
            document.querySelector('#select-skin-card').style.display = "block";
            document.querySelector("#select-eyes-card").style.display = "none";

        }
    };

 document.getElementById("show-mouth-card").onclick = function (){
        if(document.querySelector("#select-eyes-card").style.display = "block"){
            document.querySelector('#select-mouth-card').style.display = "block";
            document.querySelector("#select-eyes-card").style.display = "none";

        }
    };


    // select eye tab
eyeNormal.onclick = function () {
    document.getElementById("eyes").src = "./assets/eyes/normal.png";
};

eyeClosed.onclick = function () {
    document.getElementById("eyes").src = "./assets/eyes/closed.png";
};
eyeLong.onclick = function () {
    document.getElementById("eyes").src = "./assets/eyes/long.png";
};
eyeLaughing.onclick = function () {
    document.getElementById("eyes").src = "./assets/eyes/laughing.png";
};
eyeRolling.onclick = function () {
    document.getElementById("eyes").src = "./assets/eyes/rolling.png";
};
eyeWinking.onclick = function () {
    document.getElementById("eyes").src = "./assets/eyes/winking.png";
};

// select mouth tab

document.querySelector("#mouth-open").onclick = function () {
    document.getElementById("mouth").src = "./assets/mouth/open.png";
};

document.querySelector("#mouth-smiling").onclick = function () {
    document.getElementById("mouth").src = "./assets/mouth/smiling.png";
};
document.querySelector("#mouth-straight").onclick = function () {
    document.getElementById("mouth").src = "./assets/mouth/straight.png";
};
document.querySelector("#mouth-sad").onclick = function () {
    document.getElementById("mouth").src = "./assets/mouth/sad.png";
};
document.querySelector("#mouth-teeth").onclick = function () {
    document.getElementById("mouth").src = "./assets/mouth/teeth.png";
};

// go back from show mouth menu 
document.querySelector(".menuback").onclick = function (){
    if(document.querySelector("#select-mouth-card").style.display = "block"){
        document.querySelector('#select-mouth-card').style.display = "none";
        document.querySelector("#select-eyes-card").style.display = "block";
console.log("clicked")
    }
};

