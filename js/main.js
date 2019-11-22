'usre strict';

// 要件定義
const task = document.getElementById('task');
const action = document.getElementById('action');
const result = document.getElementById('result');
const tasks = [];

//削除ボタンの生成
const createDeleteBtn = () => {
  const btnDel = document.createElement('button');
  btnDel.textContent = '削除'
  return btnDel;
}

//ステータスボタン生成
const createStatusBtn = (trElem)　=>　{
  const idTdSta = document.createElement('td');
  trElem.appendChild(idTdSta);
  const idTdStaBtn = document.createElement('button');
  idTdSta.appendChild(idTdStaBtn);
  idTdSta.parentNode.className = 'trWrk';
  idTdStaBtn.textContent = '作業中'

  idTdStaBtn.addEventListener('click',()=>{
    if (idTdStaBtn.textContent === '作業中'){
      idTdStaBtn.textContent = '完了'
      idTdSta.parentNode.className = 'trComp'
    }else{
      idTdStaBtn.textContent = '作業中'
      idTdSta.parentNode.className = 'trWrk'
    }
  })
};


// クリックイベント
action.addEventListener('click',() => {

  tasks.push(task.value);
  task.value = "";

  const tr = document.createElement('tr');
  result.appendChild(tr);

  const idTdIndex = document.createElement('td');
  idTdIndex.textContent =  tasks.length - 1;
  tr.appendChild(idTdIndex);

  const idTdTask = document.createElement('td');
  idTdTask.textContent = tasks[tasks.length - 1];
  tr.appendChild(idTdTask);

  //ステータスボタンクリック動作
  createStatusBtn(tr);

  //削除ボタンクリック動作
  const delBtn = createDeleteBtn();
  tr.appendChild(delBtn);
  delBtn.addEventListener('click',() => {
    delBtn.parentNode.textContent = ""
  })
})

// ラジオボタン選択
const radioselect = () => {
  const work = document.querySelectorAll('input[type="radio"]')[1].checked;
  const comp = document.querySelectorAll('input[type="radio"]')[2].checked;

  //表示の初期化
  document.querySelectorAll('tr').forEach(trAll => {
    trAll.style.display = ''
  })

  if(work === true){
    //完了を非表示
      document.querySelectorAll('tr.trComp').forEach(trComp => {
        trComp.style.display = 'none';
      })
  }else if(comp === true){
    //作業中を非表示
    document.querySelectorAll('tr.trWrk').forEach(trWrk => {
      trWrk.style.display = 'none';
    })
  }else{
    //非表示を全て表示に
    document.querySelectorAll('tr').forEach(trAll => {
      trAll.style.display = ''
    })

  }
}