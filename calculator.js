let username;
let num1;
let num2;
let result;
let user_continue;

function calculate(num1, num2) {
    result = num1 + num2;
    alert('The sum of your two numbers is: '+result);
}

// start the function when user click the button
document.getElementById("demo").addEventListener("click", welFunction);

function welFunction() {
    alert('Welcome to my site!');
    username = prompt("What is your name?");
    alert('Welcome '+username+'!');

// repeat the calculator until user input N
    while (user_continue!='N'){
        num1 = Number(prompt("Please enter the first number: "));
        
        //check if input is valid number
        while(isNaN(num1)==true){num1=Number(prompt('Please enter a valid number:'))};

        num2 = Number(prompt("Please enter the second number: "));

        while(isNaN(num2)==true){num2=Number(prompt('Please enter a valid number:'))};
    
        calculate(num1,num2);

        if (result>10) {alert('That is a big number.')} else {alert('That is a small number.')};

        user_continue = prompt("Do you want to add two numbers again? Enter anything to continue and N to quit:");
        
        if(user_continue=='N'){
            alert("Thank the visitor for using the program!")
        }
    }
}
