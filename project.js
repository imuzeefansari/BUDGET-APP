document.getElementById('push').onclick = function () {
  if(document.getElementById('input').value.length == 0){
    alert('please enter a task')
  }else{
    document.getElementById('tasks').innerHTML += `<div class="task"><span id="taskname">${document.getElementById('input').value}</span>
    <button class="delete">X</button>
</div>`

let trash = document.getElementsByClassName('delete');
for (let i = 0; i < trash.length; i++) {
  trash[i].onclick = function () {
    this.parentNode.remove()
  }
}
var span = document.getElementById('taskname');
for (let i = 0; i < span.length; i++) {
  span[i].onclick = function () {
    this.classList.toggle('completed');
  };
}
document.getElementById('input').value = '';
  }
}