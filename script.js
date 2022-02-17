// ==========================Get input value==========================
function getInputValue(inputValue){
    const errorMessage = document.getElementById('error-message1');
    const inputText = inputValue.value;
    const inputAmount = parseFloat(inputText);
    inputValue.value = '';
    if(isNaN(inputAmount)){
        errorMessage.style.display = 'block';
    }
    else if(inputAmount > 0){
        return inputAmount;
    }
    else{
        errorMessage.style.display = 'block';
    }
}

// ==========================Calculate expenses==========================
function getCalculateAmount(){
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesText = totalExpenses.innerText;
    const totalExpensesAmount = parseFloat(totalExpensesText);
    let sum = 0;
    for (const num of arguments) {
        sum = sum + num;
    }
    totalExpenses.innerText = sum;
    return sum;
}

// ==========================Calculate available balance==========================
function getCalculateIncome(income, allTotalExpenses){
    const incomeValue = document.getElementById('available-balance');
    const incomeText = incomeValue.innerText;
    const IncomeAmount = parseFloat(incomeText);

    const totalIncome = income - allTotalExpenses;

    incomeValue.innerText = totalIncome;
    return totalIncome;
}


// ==========================Calculate button==========================
document.getElementById('calculate-btn').addEventListener('click', function(){
    // income
    const incomeInput = document.getElementById('income-input');
    const incomeInputValue = getInputValue(incomeInput);

    // food
    const foodInput = document.getElementById('food-input');
    const foodInputValue = getInputValue(foodInput);

    // rent 
    const rentInput = document.getElementById('rent-input');
    const rentInputValue = getInputValue(rentInput);

    // clothes
    const clothesInput = document.getElementById('clothes-input');
    const clothesInputValue = getInputValue(clothesInput);

    // all expenses
    const allAmountAdd = getCalculateAmount(foodInputValue, rentInputValue, clothesInputValue);

    // available income
    const incomeInputAdd = getCalculateIncome(incomeInputValue, allAmountAdd);

    // save percentage
    const saveButton = document.getElementById('save-btn').addEventListener('click', function(){
        const remainingBalance = document.getElementById('remaining-balance');
        const saveAmount = document.getElementById('saving-amount');

        const saveInput = document.getElementById('save-input');
        const saveInputValue = getInputValue(saveInput);

        const percentage = (saveInputValue / 100) * incomeInputAdd;
        saveAmount.innerText = percentage;
        
        const remainingTotal = incomeInputAdd - percentage;
        remainingBalance.innerText = remainingTotal;
    })
})

