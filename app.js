

document.getElementById('setBudgetBtn').onclick = function setBudget() {
  document.getElementById('TotalBudgetSpan').innerText = document.getElementById('setBudget').value + " $";
  if(document.getElementById('setBudget').value.length === 0){
    alert('please enter a Budget..');
  }
 }
 document.getElementById('push').onclick = function () {
  if(document.getElementById('input').value.length === 0){
    alert('please enter a Value..');
  }else{
    document.getElementById('tasks').innerHTML += `<div class="task"><span>${document.getElementById('categories').value}</span><span id="taskname">${document.getElementById('input').value}</span><span>${document.getElementById('amount').value}</span><span>${document.getElementById('date').value}</span><button class="delete">X</button></div>`;
  };



let userAmount = document.getElementById('amount');
let expensesSpan = document.getElementById('expenses');
let expenditure = parseFloat(userAmount.value);
let previousExp = parseFloat(expensesSpan.innerText);
let nexExp = previousExp + expenditure;
expensesSpan.textContent = nexExp.toFixed(2) + " $";


let totalBudget = document.getElementById('setBudget');
let remainingBalSpan = document.getElementById('remBal');
let totalBudgetFloat = parseFloat(totalBudget.value);
let remainingBal = totalBudgetFloat - nexExp;
remainingBalSpan.textContent = remainingBal.toFixed(2) + " $";


let trash = document.getElementsByClassName('delete');
for (let i = 0; i < trash.length; i++) {
  trash[i].onclick = function () {
  this.parentNode.remove();
 let output = nexExp - parseFloat(userAmount.value);
 expensesSpan.textContent = output;
 let remOutput = remainingBal + parseFloat(userAmount.value);
 remainingBalSpan.textContent = remOutput;
  }
// document.getElementById('input').value = '';
// document.getElementById('amount').value = '';
}
}