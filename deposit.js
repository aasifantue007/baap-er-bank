// Step - 1 add event lister to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function(){

// Step - 2 get the deposit amount from the deposit input field

const depositeField = document.getElementById('deposit-field');
    const newdepositAmountString = depositeField.value;

const newDepositAmount = parseFloat(newdepositAmountString);

//  Step - 3 get †he deposit current total 
const depositTotalElement = document.getElementById('deposit-total')
const previousDepositTotalString = depositTotalElement.innerText;   
const previousdepositTotal = parseFloat (previousDepositTotalString);

// Step - 4  add numbers to set the total deposit

const currentDepositTotal = previousdepositTotal + newDepositAmount;

depositTotalElement.innerText = currentDepositTotal;

// Step - 5 get balance current total

const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// Step - 6 calcuate current total balance 

const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotalElement.innerHTML = currentBalanceTotal;





// step - 7 clear the deposit field
    depositeField.value = ' '; 
})

