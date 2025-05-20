let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let multi = document.getElementById("multi");
let div = document.getElementById("div");
let ans = document.getElementById("ans");
let Ac = document.getElementById("Ac");



function add_fun(){
        let result = parseInt(num1.value) + parseInt (num2.value)

        ans.innerText = result;

        
}
add.onclick = add_fun;

function sub_fun() {
        let result = parseInt(num1.value) - parseInt(num2.value);
        ans.innerText = result;
}
    
    sub.onclick = sub_fun;

    
function multi_fun(){
        let result = parseInt(num1.value) * parseInt(num2.value);
        ans.innerText = result;
}
multi.onclick = multi_fun;
  
function div_fun(){
        let result = parseInt(num1.value) / parseInt(num2.value);
        ans.innerText = result;
}
div.onclick = div_fun;
  
function clear_fun() {
        ans.innerText = ""; 
        num1.value = "";    
        num2.value = "";       
    }
    Ac.onclick = clear_fun;
