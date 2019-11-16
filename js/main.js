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

  //ステータスボタン作成、クリック動作
  const td3 = document.createElement('td');
  td3.textContent = '作業中'
  td3.className = 'btn';
  tr.appendChild(td3);
  td3.parentNode.className = 'trWrk';
  td3.addEventListener('click',()=>{
    if (td3.textContent === '作業中'){
      td3.textContent = '完了'
      td3.parentNode.className = 'trComp'
    }else{
      td3.textContent = '作業中'
      td3.parentNode.className = 'trWrk'
    }
  })

  //削除ボタン作成、クリック動作
  const btnDel = document.createElement('button');
  tr.appendChild(btnDel);
  btnDel.textContent = '削除'
  btnDel.addEventListener('click',()=>{
    btnDel.parentNode.textContent = ""
  })

})

// ラジオボタン選択
const radioselect = ()=>{
  const work = document.querySelectorAll('input[type="radio"]')[1].checked;
  const comp = document.querySelectorAll('input[type="radio"]')[2].checked;

  //表示の初期化
  document.querySelectorAll('tr').forEach(trAll => {
    trAll.style.display = ''
  })

    if(work === true){
      //完了を非表示
        document.querySelectorAll('tr.trComp').forEach(trComp=>{
          trComp.style.display = 'none';
        })
    }else if(comp === true){
      //作業中を非表示
      document.querySelectorAll('tr.trWrk').forEach(trWrk=>{
        trWrk.style.display = 'none';
      })
    }else{
      //非表示を全て表示に
      document.querySelectorAll('tr').forEach(trAll => {
        trAll.style.display = ''
      })

    }
}
