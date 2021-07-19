// const loginform = document.querySelector("#login-form");
// const loginInput = loginform.querySelector("input");
// const loginButton = loginform.querySelector("button");

// const loginform = document.querySelector("#login-form");
// const loginInput = document.querySelector('#login-form input');
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";

// function onLoginSubmit(event){
//     //console.dir(loginInput.value);
//     //console.log("click");
//  event.preventDefault();
//  loginform.classList.add(HIDDEN_CLASSNAME);
//  const username = loginInput.Value;
//  localStorage.setItem("username", username);
//  greeting.innerText = `Hello ${username}`;
//  greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginform.addEventListener("submit", onLoginSubmit);

// const savedUsename = localStorage.getItem("username");

// console.log(savedUsename);
//localStorage : 키와 값으로 이루어진 데이터 js API
// ** 웹 스토로지는 문자열 데이터만 저장가능
//해결방법
//1. JSON 형태로 데이터를 읽고 쓴다
//2. 로컬스토로지에 쓸 데이터를 JSON형태로 직렬화하고, 읽은 데이터를 JSON형태로 역직렬화 하면 원본의 데이터를 그대로 얻을 수 있다

// > localStorage.setItem('json', JSON.stringify({a: 1, b: 2}))
// undefined
// > JSON.parse(localStorage.getItem('json'))
// {a: 1, b: 2}

//localStorage   /  sessionStorage


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();//이벤트에 대한 동작을 못하도록
  loginForm.classList.add(HIDDEN_CLASSNAME);//form을 숨기기 위해 더해준다
  const usernameThatTheUserWrote = loginInput.value;//input의 값을 가져옴
  localStorage.setItem("USERNAME_KEY", usernameThatTheUserWrote);
  paintGreetings(usernameThatTheUserWrote);
}
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");
//localStorage : 브라우저가 가지고 있는 작은 DB같은 API
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);//hidden을 없애주고
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}

