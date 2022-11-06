const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const  TODOS_KEY = 'todos'

let toDos = [];



function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //js object나 array나 어떤 것이든 Str로 바꿔주는 기능  => JSON.stringify(toDos)
    //반대로 JSON.parse("[1,2,3,4]") => [1,2,3,4]
  
}

function deliteToDo(event){
/** btn이 여러개 있을 때 삭제 하는 것을 알려면? */
// console.log(event) => 첫번째 인자의 경우 정보를 나타냄, 정보를 확인하고 타겟을 파악
//dir(button) > parent를 확인 한다.
// console.dir(event.target.parentElement.innerText); 
    const li = event.target.parentElement; // 삭제하고자 하는 값 
    console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    // id를 만들어서 해당 id값이 아닌 것을 삭제 
    saveToDos();

}

function paintToDo(newTodo){
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText = "❌";
    button.style.backgroundColor = '#f2e4c5';
    button.style.border = 'none';
    button.addEventListener('click',deliteToDo);
    li.appendChild(span); // li안에 spen 넣기
    li.appendChild(button); 
    toDoList.appendChild(li);

    
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value=''; //Enter 누르면 input에 입력되어 있던 값 지우기
    // localStorge에서 값을 지우기 위한 작업 (아래 오브젝트)
    const newTodoObj = {
        text:newTodo, // newTodo안에 있는 text랑 랜덤한 id 값을 같이 준다
        id: Date.now() // Date.now()는 밀리초를 반환하는 함수이다.
    } 
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !==null ){
    const parsedToDos = JSON.parse(savedToDos);
 //   toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // forEach 함수는 paintToDo 를 paresdToDos 배열의 요소마다 실행
    // forEach는 paintToDo를 기본적으로 실행
    // forEach는 각각의 item을 줌 => item이 object가 됌 
   
}


/***********************************************************************
 * [1,2,3,4].filter() 
 *  filter()함수는 함수가 필요하다고 개발자에게 요청을 한다 
 * 
 * 예시
 *  const menu = 'banana', 'orange', 'tomato';
 * 
 *  function testFunction(forLunch){
 *      return forLunch ! == 'banana'
 * }
 * 
 *  menu.filter(testFunction) 
 *  => 반환값 'orange', 'tomato'
 *
***********************************************************************/


//foreach는 array에 있는 각각의 item에 대해서 실행이 가능하다.
 
// localStage 에는 텍스트만 저장이 가능하다 
// date.now() =>밀리초를 주는 함수이다 (1000분의 1초)