const foodInput = document.getElementById('total-food');
const rentInput = document.getElementById('total-rent');
const clothesInput = document.getElementById('total-clothes');
function totalExpenses() {
    if (foodInput.value == '') {
        foodInput.value = 0;
        if (foodInput.value == 'string') {
            alert('invalid')

        }
    }
    if (rentInput.value == '') {
        rentInput.value = 0;
    }
    if (clothesInput.value == '') {
        clothesInput.value = 0;
    }
    const totalExpenses = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothesInput.value);


    return totalExpenses;
}

// balance

function balance() {
    const incomeTotal = document.getElementById('total-income');
    const balance = parseFloat(incomeTotal.value) - parseFloat(totalExpenses());

    const balanceTotal = document.getElementById('total-Balance');
    balanceTotal.innerText = balance;

}
document.getElementById('main-button').addEventListener('click', function () {

    // total expenses

    const priviousExpenses = document.getElementById('total-expenses')
    priviousExpenses.innerText = totalExpenses();

    // Income calculate
    balance();
    // clear input field
    foodInput.value = '';
    rentInput.value = '';
    clothesInput.value = '';

})
// percentage
document.getElementById('save-button').addEventListener('click', function () {
    const savingPer = document.getElementById('savings-per').value;
    const totalIncome = document.getElementById('total-income').value;

    const totalSavingsAmount = document.getElementById('saving-amount');
    const savingsAmount = parseFloat(totalIncome) * parseFloat(savingPer);
    const savingsAmountPer = savingsAmount / 100;
    totalSavingsAmount.innerText = savingsAmountPer;

    const balanceTotal = document.getElementById('total-Balance').innerText;
    const remainingBalance = document.getElementById('remaining-balance')
    const totalRemainingBalance = balanceTotal - savingsAmountPer;
    remainingBalance.innerText = totalRemainingBalance;

})
