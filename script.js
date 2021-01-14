const display = document.querySelector(".display");

////////////////////////////////////////////////////////////////
var num = 0;
var goal = 15;

//
function displayUpdate(value){
    if(num < goal){
        num += parseFloat(value);
        display.innerHTML = num;
    }

    if(num == goal){
        display.innerHTML = "GOAL";
        document.getElementById("display1").style.backgroundColor = "lightgreen";
    }
}
////////////////////////////////////////////////////////////////