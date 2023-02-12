// Step - 1 //

document.getElementById('btn-withdraw').addEventListener('click', function(){

    // Step - 2 //
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

// Step - 3 //
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithrawTotalString);

// Step - 4 //

const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;

// Step - 5 //

const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);



// Step - 6 //

const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;



// step - 7 //

withdrawField.value = ' '; 

    
    
})