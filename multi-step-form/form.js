   
 var form1 = document.getElementById("StepOneContainer");
 var form2 = document.getElementById("StepTwoContainer");
 var form3 = document.getElementById("StepThreeContainer");
 var next1 = document.getElementById("StepOneNext");
 var next2 = document.getElementById("StepTwoNext");
 var back1 = document.getElementById("StepTwoPrevious");
 var back2 = document.getElementById("StepThreePrevious");
 var formSubmit = document.getElementById("StepThreeSubmit");
   

next1.onclick = function (){
    form1.style.display = "none"
    form2.style.display = "block"
};

back1.onclick = function (){
    form1.style.display = "block"
    form2.style.display = "none"
};
next2.onclick = function (){
    form2.style.display = "none"
    form3.style.display = "block"
};

back2.onclick = function (){
    form2.style.display = "block"
    form3.style.display = "none"
};

