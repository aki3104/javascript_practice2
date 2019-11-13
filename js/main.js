'usre strict';

// 要件定義
const Task = document.getElementById('task');
const action = document.getElementById('action');
const result = document.getElementById('result');
const tasks = [];

// クリックイベント
action.addEventListener('click',()=>{
  tasks.push(Task.value);
  Task.value = "";

  const tr = document.createElement('tr');
  result.appendChild(tr);

  const td1 = document.createElement('td');
  td1.textContent =  tasks.length-1;
  tr.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = tasks[tasks.length-1];
  tr.appendChild(td2);

  const td3 = document.createElement('td');
  td3.textContent = '作業中'
  td3.className = 'btn';
  tr.appendChild(td3);

  const BtnDel = document.createElement('button');
  tr.appendChild(BtnDel);
  BtnDel.textContent = '削除'

})

