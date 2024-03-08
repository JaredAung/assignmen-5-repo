let num1 = prompt("Enter the first number: ");
let num2 = promot("Enter the second number: ");

num1 = parseInt(num1);
num2 = parseInt(num2);

if(isNaN(num1) || isNaN(num2)){
    alert ("Invalid numbers. Try again.");
}
else{
    let add = num1 + num2;
    alert("The sum of the $(num1) and $(num2) is $(result)");
}