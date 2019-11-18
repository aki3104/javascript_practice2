'usre strict';

// 要件定義
const task = document.getElementById('task');
const action = document.getElementById('action');
const result = document.getElementById('result');
const tasks = [];


// クリックイベント
action.addEventListener('click',() => {

    //ステータスボタン生成
    const createStatusBtn = ()　=>　{
      const idTdSta = document.createElement('td');
      tr.appendChild(idTdSta);
      idTdSta.parentNode.className = 'trWrk';
      const idTdStaBtn = document.createElement('button');
      idTdSta.appendChild(idTdStaBtn);
      idTdStaBtn.textContent = '作業中'
      return idTdStaBtn;
    };  

    //削除ボタンの生成
    const createDeleteBtn = () => {
      const btnDel = document.createElement('button');
      btnDel.textContent = '削除'
      return tr.appendChild(btnDel);
    };

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

  //ステータスボタン作成、クリック動作
  createStatusBtn();
  // idTdStaBtn.addEventListener('click',()=>{
  //   if (idTdStaBtn.textContent === '作業中'){
  //     idTdStaBtn.textContent = '完了'
  //     idTdStaBtn.parentNode.className = 'trComp'
  //   }else{
  //     idTdStaBtn.textContent = '作業中'
  //     idTdStaBtn.parentNode.className = 'trWrk'
  //   }
  // })

  //削除ボタン作成、クリック動作
  createDeleteBtn().addEventListener('click',() => {
    // createDeleteBtn().parentNode = ""
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
