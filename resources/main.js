function AddNumbers(){
    var number1 = parseFloat(document.getElementByID(num1).value);
    var number2 = parseFloat(document.getElementById(num2).value);
    var result = number1  + number2;
    document.getElementById(result).value = 'The sum is '+ result;

}
var addButton = document.getElementById('Addition');
addButton.addEventListener("click", AddNumbers);