//비동기

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve , ms));
}

async function process() {
    console.log('hi');
    await sleep(1000);
    console.log('hello');
}

process();


//event loop

const snack = () => Promise.resolve('와, 맛있겠다!')

async function mySnack() {
    console.log('치즈 케이크 주세요!')
    const res = await snack()
    console.log(res)
}

console.log('주문하시겠어요?')
mySnack();
console.log('주문하신 케이크 나왔습니다!')

function fetchUser() {
    var url = 'https://jsonplaceholder.typicode.com/users/7'
    return fetch(url).then(function(response) {
      return response.json();
    });
  }
  
  function fetchTodo() {
    var url = 'https://jsonplaceholder.typicode.com/todos/1';
    return fetch(url).then(function(response) {
      return response.json();
    });
  }
  
  async function logTodoTitle() {
    var user = await fetchUser();
    if (user.id === 7) {
      var todo = await fetchTodo();
      console.log(todo.title); // delectus aut autem
    }
  }



  