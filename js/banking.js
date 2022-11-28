// handle deposit button event
document.getElementById('btn-deposit').addEventListener('click', function(){  
// get the amount deposited
const depositInput = document.getElementById('deposit-field');
const  newDepositAmountText = depositInput.value;
const newDepositAmount = parseFloat(newDepositAmountText);
   // update deposit total
   const depositTotal = document.getElementById('deposit-total');
   const previousDepositText = depositTotal.innerText;
   const previousDepositAmount = parseFloat(previousDepositText);
   const newDepositTotal = previousDepositAmount + newDepositAmount;
 // update account balance 
 const balanceTotal = document.getElementById('balance-total');
 const balanceTotalText = balanceTotal.innerText;
 const previousBalanceTotal = parseFloat(balanceTotalText);
 const newBalanceTotal = previousBalanceTotal + newDepositAmount;
 balanceTotal.innerText = newBalanceTotal;
   depositTotal.innerText = newDepositTotal;
     
 
     // clear the deposit input field
     depositInput.value = '';
});

// ----- withdraw -----
// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
     // step-2:
   const withdrawField = document.getElementById('withdraw-field');
   const newWithdrawString = withdrawField.value;
   const newWithdrawAmount = parseFloat(newWithdrawString);
    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
     // step-4
     const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     withdrawTotalElement.innerText = currentWithdrawTotal;
     // step-5
     const balanceTotalElement = document.getElementById('balance-total');
     const previousBalanceTotalString =  balanceTotalElement.innerText;
     const previousBalanceTotal = parseFloat(previousBalanceTotalString);
       // step-6
     const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
     balanceTotalElement.innerText = newBalanceTotal;
      // step-7
    withdrawField.value = '';
})
