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
const createStatusBtn = ()　=>　{
  const StaBtn = document.createElement('button');
  return StaBtn;
};

// クリックイベント
action.addEventListener('click',() => {
  const todo = {
    value: inputTask.value, 
    status: '作業中'
  };

  todos.push(todo);
  inputTask.value = "";
  radioselect();
  displayTodos();
});

const displayTodos = () => {

  //初期化
  result.textContent = '';

  filteredTodos.forEach((filteredTodo, index ) => {
    // todo表示ようのtr要素を生成
      const taskElement = document.createElement('tr');
      result.appendChild(taskElement);

      //ID表示ようのtd要素を生成
      const idElement = document.createElement('td');
      idElement.textContent = index;

      //task表示用td要素を生成
      const commentElement = document.createElement('td');
      commentElement.textContent = filteredTodo.value;

      //statusBtn表示用td要素を生成
      const statusBtnElement = document.createElement('td')
      const staBtn = createStatusBtn();
      staBtn.textContent = filteredTodo.status;
      statusBtnElement.appendChild(staBtn);

      //statusボタンクリック
      staBtn.addEventListener('click',()=>{
        if (staBtn.textContent === '作業中'){
          staBtn.textContent = '完了'
          todos[index].status = '完了'
        }else{
          staBtn.textContent = '作業中'
          todos[index].status = '作業中'
        }
      })

      //deleteBtn表示用td要素を生成
      const delBtn = createDeleteBtn();

      //deleteBtnクリック動作
      delBtn.addEventListener('click',() => {
        todos.splice(index, 1)
        filteredTodos.splice(index, 1)
        displayTodos();
      });

      //生成したtdをtrにセット
      taskElement.appendChild(idElement);
      taskElement.appendChild(commentElement);
      taskElement.appendChild(statusBtnElement);
      taskElement.appendChild(delBtn);
  });

}


// ラジオボタン選択
const radioselect = () => {
  const work = document.querySelectorAll('input[type="radio"]')[1].checked;
  const comp = document.querySelectorAll('input[type="radio"]')[2].checked;

  //filteredTodos配列の初期化
  while((i = filteredTodos.shift()) !== undefined){
  }

// todoをfiltertodoに格納
  todos.forEach((todo) => {
    if(work === true){
      if(todo.status === '作業中'){
        const filterTodo = {
          value: todo.value, 
          status: todo.status,
        };
        filteredTodos.push(filterTodo);
        displayTodos();
      }
    }else if(comp === true){
      if(todo.status === '完了'){
        const filterTodo = {
          value: todo.value, 
          status: todo.status,
        };
        filteredTodos.push(filterTodo);
        displayTodos();
      }
    }else{
        const filterTodo = {
          value: todo.value, 
          status: todo.status,
        };
        filteredTodos.push(filterTodo);
        displayTodos();
    }
     
  });
}
