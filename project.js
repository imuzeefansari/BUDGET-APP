document.getElementById('push').onclick = function () {
  if(document.getElementById('input').value.length === 0){
    alert('please enter a task');
  }else{
    document.getElementById('tasks').innerHTML += `<div class="task"><span id="taskname">${document.getElementById('input').value}</span>
    <span>${document.getElementById('amount').value}</span>
    <button class="delete">X</button>
</div>`;
  }
let userAmount = document.getElementById('amount');
let expensesSpan = document.getElementById('expenses');
let expenditure = parseInt(userAmount.value);
let sum = parseInt(expensesSpan.innerText) + expenditure;
let totalBudget = document.getElementById('setBudget').value;
let remainingBal = totalBudget - sum;
document.getElementById('remBal').innerText = remainingBal;

let trash = document.getElementsByClassName('delete');
for (let i = 0; i < trash.length; i++) {
  trash[i].onclick = function () {
   this.parentNode.remove();
  }
}
var span = document.getElementById('taskname');
for (let i = 0; i < span.length; i++) {
  span[i].onclick = function () {
    this.classList.toggle('completed');
  };
}
document.getElementById('input').value = '';
document.getElementById('amount').value = '';


  }
  document.getElementById('setBudgetBtn').onclick = function setBudget() {
   let setBudget =  document.getElementById('TotalBudgetSpan').innerText = document.getElementById('setBudget').value;
   document.getElementById('setBudget').value = '';
  }
  
  