// ==========================Get input value==========================
function getInputValue(inputValue){
    const inputText = inputValue.value;
    const inputAmount = parseFloat(inputText);
    inputValue.value = '';
    if(inputAmount > 0){
        return inputAmount;
    }
}

// ==========================Calculate Amount==========================
function getCalculateAmount(){
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesText = totalExpenses.innerText;
    const totalExpensesAmount = parseFloat(totalExpensesText);
    console.log(totalExpensesAmount);
    let sum = 0;
    for (const num of arguments) {
        sum = sum + num;
    }
    totalExpenses.innerText = sum;
    return sum;
}

// ==========================Calculate button==========================
document.getElementById('calculate-btn').addEventListener('click', function(){
    const incomeInput = document.getElementById('income-input');

    // food
    const foodInput = document.getElementById('food-input');
    const foodInputValue = getInputValue(foodInput);

    // rent 
    const rentInput = document.getElementById('rent-input');
    const rentInputValue = getInputValue(rentInput);

    // clothes
    const clothesInput = document.getElementById('clothes-input');
    const clothesInputValue = getInputValue(clothesInput);

    const clothesAmountAdd = getCalculateAmount(foodInputValue, rentInputValue, clothesInputValue);
})