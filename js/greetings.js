const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');
const information = document.querySelector('#deliteInfo');


const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';



function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("USERNAME_KEY", username);
 paintGreetings();
}



function paintGreetings(){
  const username = localStorage.getItem("USERNAME_KEY");
  greeting.innerText = ` Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);


  const button = document.createElement('button');
  button.innerText = "delite info"
  button.style.backgroundColor = 'tomato';
  button.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
  button.addEventListener('click', deliteInfo)
  information.appendChild(button);
  
  if(greeting.classList.contains(HIDDEN_CLASSNAME)){
    document.getElementById('todo-form').classList.add(HIDDEN_CLASSNAME);
  }else{
    document.getElementById('todo-form').classList.remove(HIDDEN_CLASSNAME);
  }
}

function deliteInfo(){
  window.localStorage.clear();
  window.location.reload();

}

const savedUsername = localStorage.getItem('USERNAME_KEY');

if(savedUsername === null){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
}else{
  // show the greetings
  paintGreetings()
}

