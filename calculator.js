

let username;
let num1;
let num2;
let result;
let user_continue;



function calculate(num1, num2) {
    result = num1 + num2;
    alert('The sum of your two numbers is: '+result);
}

document.getElementById("demo1").addEventListener("click", welFunction);

function welFunction() {
   alert('Welcome to my site!');
   username = prompt("What is your name?");
   alert('Welcome '+ username);
}

document.getElementById("demo2").addEventListener("click", calFunction);

function calFunction() {
    alert('a')
}
/*
alert('Welcome to my site!');

username = prompt("What is your name?");

alert('Welcome '+ username);

while (user_continue!='N'){

num1 = Number(prompt("Please enter the first number: "));
num2 = Number(prompt("Please enter the second number: "));

calculate(num1, num2);

if (result>10) {alert('That is a big number')} else {alert('That is a small number')};

user_continue = prompt("Please enter Y if you want to continue or N to quit: ");
}

*/


