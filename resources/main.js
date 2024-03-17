function AddNumbers(){
    var number1 = parseFloat(document.getElementById(num1).value);
    var number2 = parseFloat(document.getElementById(num2).value);
    var result = number1  + number2;
    document.getElementById(result).innerText = 'The sum is '+ result;

}
var addButton = document.getElementById('Addition');
addButton.addEventListener("click", AddNumbers);