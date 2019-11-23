'usre strict';

// 要件定義
const inputTask = document.getElementById('task');
const action = document.getElementById('action');
const result = document.getElementById('result');
const todos = [];
const filteredTodos = [];

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
  idTdStaBtn.textContent = '作業中'

  idTdStaBtn.addEventListener('click',()=>{
    if (idTdStaBtn.textContent === '作業中'){
      idTdStaBtn.textContent = '完了'
    }else{
      idTdStaBtn.textContent = '作業中'
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
  console.log(todos);
  displayTodos();
});

const displayTodos = () => {

  //初期化
  result.textContent = '';

  todos.forEach((todo, index ) => {
    // todo表示ようのtr要素を生成
      const taskElement = document.createElement('tr');
      result.appendChild(taskElement);

      //ID表示ようのtd要素を生成
      const idElement = document.createElement('td');
      const taskId = todo.index;
      idElement.textContent = taskId;

      //task表示用td要素を生成
      const commentElement = document.createElement('td');
      commentElement.textContent = todo.value;



      //deleteBtn表示用td要素を生成
      const delBtn = createDeleteBtn();
      
      // delBtn.addEventListener('click',() => {
      //   delBtn.parentNode.textContent = ""
      // });

      //生成したtdをtrにセット
      taskElement.appendChild(idElement);
      taskElement.appendChild(commentElement);
      createStatusBtn(taskElement);
      taskElement.appendChild(delBtn);
  });
}


// ラジオボタン選択
// const radioselect = () => {
//   const work = document.querySelectorAll('input[type="radio"]')[1].checked;
//   const comp = document.querySelectorAll('input[type="radio"]')[2].checked;
//   delete filteredTodos;

//todoをfiltertodoに格納
  // todos.forEach((todo) => {
  //   if(work === true){
  //     if(todo.status === '作業中'){
  //       const filterTodo = {
  //         index: todo.index,
  //         value: todo.value, 
  //         status: todo.status,
  //       };
  //       filteredTodos.push(filterTodo);
  //       console.log(filteredTodos);
  //       displayTodos();
  //     }
  //   }else if(comp === true){
  //     if(todo.status === '完了'){
  //       const filterTodo = {
  //         index: todo.index,
  //         value: todo.value, 
  //         status: todo.status,
  //       };
  //       console.log(filteredTodos);
  //   }else{
  //       const filterTodo = {
  //         index: todo.index,
  //         value: todo.value, 
  //         status: todo.status,
  //       };
  //       filteredTodos.push(filterTodo);
  //       console.log(filteredTodos);
  //     }
  //   } 
  // });
// }