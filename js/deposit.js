// stap-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount grom the deposite input fild
    const depositFild = document.getElementById('deposit-fild');
    const newDepositAmountString = depositFild.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(typeof newDepositAmount);
    
    // step-3: get the current deposit total
    // for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
     
    // step-4: add numbers to set the total deposit
     const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get ballance current total
    const ballanceTotalElement = document.getElementById('Balance-total');
    const previousbalanceTotalString = ballanceTotalElement.innerText;
    const previousbalanceTotal = parseFloat(previousbalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousbalanceTotal + newDepositAmount;
    // set the balance total
    ballanceTotalElement.innerText = currentBalanceTotal; 

    // step-7: clear the deposit fild
    depositFild.value = '';

})