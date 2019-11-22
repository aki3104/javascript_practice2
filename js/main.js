'usre strict';

// 要件定義
const inputTask = document.getElementById('task');
const action = document.getElementById('action');
const result = document.getElementById('result');
const todos = [];

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
  const todo = {
    index: todos.length,
    value: inputTask.value, 
    status: '作業中'
  };

  todos.push(todo);
  inputTask.value = "";

 
//   // todo表示ようのtr要素を生成
//     const taskElement = document.createElement('tr');

//     //ID表示ようのtd要素を生成
//     const idElement = document.createElement('td');
//     const taskId = filteredTodos.id;
//     idElement.textContent = taskId;

//     //task表示用td要素を生成
//     const commentElement = document.createElement('td');
//     commentElement.textContent = filteredTodos.task;

//     //statusBtn表示用td要素を生成
//     const statusBtnElement = document.createElement('td');
//     const statusBtn = createStatusBtn(taskId - 1);
//     statusBtnElement.appendChild(statusBtn);

//     //deleteBtn表示用td要素を生成
//     const removeBtnElement = document.createElement('td');
//     const removeBtn = createRrmoveBtn(taskId - 1);
//     removeBtnElement.appendChild(removeBtn);

//     //生成したtdをtrにセット
//     taskElement.appendChild(idElement);
//     taskElement.appendChild(commentElement);
//     taskElement.appendChild(statusBtnElement);
//     taskElement.appendChild(removeBtnElement);
    
//     todoList.appendChild(taskElement);
//   });
// // }

//   // const tr = document.createElement('tr');
//   // result.appendChild(tr);

//   // const idTdIndex = document.createElement('td');
//   // idTdIndex.textContent =  todos.length - 1;
//   // tr.appendChild(idTdIndex);

//   // const idTdTask = document.createElement('td');
//   // idTdTask.textContent = todos[todos.length - 1];
//   // tr.appendChild(idTdTask);

//   // //ステータスボタンクリック動作
//   // createStatusBtn(tr);

//   // //削除ボタンクリック動作
//   // const delBtn = createDeleteBtn();
//   // tr.appendChild(delBtn);
//   // delBtn.addEventListener('click',() => {
//   //   delBtn.parentNode.textContent = ""
//   // })

// // const displyaTodos = radioType => {

// //   //選択されているラジオボタンに応じてtodosをフィルタリング
// //   const filteredTodos = Todos(radioType);

// //   //tbodyタグを取得
// //   const result = document.getElementById('result');

// //   //初期化
// //   result.textContent = '';

// //   filteredTodos.forEach((filteredTodos, index ) => {
// //     //todo表示ようのtr要素を生成
// //     const taskElement = document.createElement('tr');

// //     //ID表示ようのtd要素を生成
// //     const idElement = document.createElement('td');
// //     const taskId = filteredTodos.id;
// //     idElement.textContent = taskId;

// //     //task表示用td要素を生成
// //     const commentElement = document.createElement('td');
// //     commentElement.textContent = filteredTodos.task;

// //     //statusBtn表示用td要素を生成
// //     const statusBtnElement = document.createElement('td');
// //     const statusBtn = createStatusBtn(taskId - 1);
// //     statusBtnElement.appendChild(statusBtn);

// //     //deleteBtn表示用td要素を生成
// //     const removeBtnElement = document.createElement('td');
// //     const removeBtn = createRrmoveBtn(taskId - 1);
// //     removeBtnElement.appendChild(removeBtn);

// //     //生成したtdをtrにセット
// //     taskElement.appendChild(idElement);
// //     taskElement.appendChild(commentElement);
// //     taskElement.appendChild(statusBtnElement);
// //     taskElement.appendChild(removeBtnElement);
    
// //     todoList.appendChild(taskElement);
// //   });
// // }

//   // const tr = document.createElement('tr');
//   // result.appendChild(tr);

//   // const idTdIndex = document.createElement('td');
//   // idTdIndex.textContent =  todos.length - 1;
//   // tr.appendChild(idTdIndex);

//   // const idTdTask = document.createElement('td');
//   // idTdTask.textContent = todos[todos.length - 1];
//   // tr.appendChild(idTdTask);

//   // //ステータスボタンクリック動作
//   // createStatusBtn(tr);

//   // //削除ボタンクリック動作
//   // const delBtn = createDeleteBtn();
//   // tr.appendChild(delBtn);
//   // delBtn.addEventListener('click',() => {
//   //   delBtn.parentNode.textContent = ""
//   // })
// })

// ラジオボタン選択
const radioselect = () => {
  const work = document.querySelectorAll('input[type="radio"]')[1].checked;
  const comp = document.querySelectorAll('input[type="radio"]')[2].checked;
  todos.forEach((index, value, sutatus) => {

    //表示の初期化
    document.querySelectorAll('tr').forEach(trAll => {
      trAll.style.display = ''
    })

    if(work === true){
      //完了を非表示
      const filterTodo = {
        index: todo.index,
        value: todo.value, 
        status: todo.status,
      };
      filteredTodos.push(filterTodo);
      console.log(filteredTodos);
      
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
    })
  }
})