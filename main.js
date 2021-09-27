
var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");


submitBtn.addEventListener("click", submitHandler);



function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);
  
  calculateProfitAndLoss(ip, qty, curr);
}


function calculateProfitAndLoss(initial, quantity, current) {

if(initial <= 0|| quantity<=0 ||current<=0)
{
outputBox.innerHTML =`Invalid entry,please enter valid digits`;
}
else{
  if (initial > current) {
    
    var loss = (initial - current) * quantity;
    var lossPercentage = ((initial - current) / initial) * 100;
    loss=loss.toFixed(2);
    lossPercentage=lossPercentage.toFixed(2);
    showOutput(
      `Hey,Your loss is ${loss} and the percent is ${lossPercentage}%`
    );

    function showOutput(message) {
      outputBox.style.color = 'seagreen';
      outputBox.innerHTML = message;
  }
  
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = ((current - initial) / initial) * 100;
    profit=profit.toFixed(2);
    profitPercentage=profitPercentage.toFixed(2);

    showOutput(
      `Hey,Your profit is ${profit} and the percent is ${profitPercentage}%`
    );

    function showOutput(message) {
      outputBox.style.color = 'goldenrod';
      outputBox.innerHTML = message;
  }
  
  } else {
    showOutput(`No change in price of stock!`);
    function showOutput(message) {
      outputBox.innerHTML = message;
    }
  }
}
}

