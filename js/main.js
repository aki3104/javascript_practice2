'usre strict';

// 要件定義
let Task = document.getElementById('task');
const action = document.getElementById('action');
const result = document.getElementById('result');
let list = [];

// クリックイベント
action.addEventListener('click',()=>{
  const div = document.createElement('div');
  result.appendChild(div);
  const p = document.createElement('p');
  div.appendChild(p);
  list.push(Task.value);
  p.textContent = `${list.length-1}` + "    " + `${list[list.length-1]}`;
  Task.value = "";

  //ボタンの作成
  const BtnID = document.createElement('button');
  div.appendChild(BtnID);
  BtnID.textContent = '作業中'

  const BtnDel = document.createElement('button');
  div.appendChild(BtnDel);
  BtnDel.textContent = '削除'
  console.log(list);
  })

