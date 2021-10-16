function view(num){
    document.getElementById("input").value+=num;
}

function clr(){
    document.getElementById("input").value = "";
}

function equ(){
    let x = document.getElementById("input").value;
    let y = eval(x);
    
    document.getElementById("input").value = y;
}