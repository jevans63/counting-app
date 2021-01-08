const display = document.querySelector(".display");

////////////////////////////////////////////////////////////////
var num = 0;

//
function displayUpdate(value){
    num += parseFloat(value);
    display.innerHTML = num;
    if(num == 15){
        display.innerHTML = "GOAL";
        document.getElementById("display1").style.backgroundColor = "lightgreen";
    }
}
////////////////////////////////////////////////////////////////