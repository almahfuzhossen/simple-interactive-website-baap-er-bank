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

   depositTotal.innerText = newDepositTotal;
})