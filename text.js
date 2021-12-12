let toDos = [];


const input = document.querySelector('#inputBox')
const form = document.querySelector('.toDoForm')

const toDoList = document.querySelector('.toDoList')
const completedList = document.querySelector('.completedList')


// event submit => add userinput to array toDos

form.addEventListener('submit', (event)=> {
    event.preventDefault()
    let userInput = input.value
    if(userInput){
        toDos.push(userInput)
        addToDoList()
    }

});
// loop through elements toDos

function addToDoList (){
    toDoList.innerHTML = ''
    for (let i = 0; i < toDos.length; i++){
        showToDos(toDos[i])
    document.querySelector("#toDoCount").innerText = toDos.length;
}
}
//show elements of toDos

function showToDos(test){

const li = document.createElement('li');
li.classList.add('toDoItem')
li.innerText = test
toDoList.appendChild(li);

// remove toDo item li

li.addEventListener('click', removeToDoItem)


function removeToDoItem(){
    let index = toDos.indexOf(li)
    toDos.splice(index, 1)
    toDoList.removeChild(li)
    completed.push(li)
    addCompletedList()
    document.querySelector("#toDoCount").innerText = toDos.length;

}

}
let completed = []
// // loop through elements completed

function addCompletedList (){
    completedList.innerHTML = ''
    for (let i = 0; i < completed.length; i++){
        showCompleted(completed[i].innerText)
        console.log(completed[i].innerText)
        document.querySelector("#completedToDoCount").innerText = completed.length;
 
}
}
// //show elements of completed
function showCompleted(test){

    const li = document.createElement('li');
    li.classList.add('doneItem')
    li.innerText = test
    completedList.appendChild(li);
}
















// form.addEventListener('submit', checkUserInput)

// function checkUserInput (){
//     event.preventDefault()
//     let userInput = input.value
//   if(userInput){
//       toDos.push(userInput)
//       addToList()
//   }
// userInput.value = ''
// }



// function addToList(){
//     toDoList.innerHTML = ''
// for (let i = 0; i < toDos.length; i++){
// show(toDos[i])
// }
// // document.querySelector("#toDoCount").innerText = toDos.length;
// }

// function show(userInput){
// const li = document.createElement('li');

// li.classList.add('toDoItem')


// li.innerText = userInput
// toDoList.appendChild(li);

// li.addEventListener('click', removeItem)
// function removeItem(){
//     toDoList.removeChild(li)
    
//     completed.push(li)

//     addToCompletedList()
// }
// function addToCompletedList(){
//     completedList.innerHTML=''
// for (let i = 0; i < completed.length; i++){
//     showCompleted(completed[i])
// }
// }


// function showCompleted(completed){
//     const li = document.createElement('li');

// li.classList.add('doneItem')
// li.innerText = completed
// completedList.appendChild(li);
// }
// }


// // When the user clicks a to-dolist item

// // - Remove that to-do from the to-do array and list
// toDoList.removeChild(item[i])
// toDos.pop(item[i])


// //3 - ajouter to do a la completed to-dos array refaire la completed liste
// let done = [];
// done.push(item[i])
// addToCompleteList(done)
// })
// }

// // - Add that to-do to a completed to-dos array and render that completed list 

//  function addToCompleteList(){
//     completedList.innerHTML = ''
//     for(let i = 0; i<done.length; i++){
//         showCompleteList(done[i])
//     }
    
//  }
// function showCompleteList(item){
   

//     li.classList.add('completedList');   
//     li.innerText = done
//     completedList.appendChild(li);  
// }
// }





















// 2. COMPLETE TO-DOS

// When the user clicks a to-do list item

// - Remove that to-do from the to-do array and list
// - Add that to-do to a completed to-dos array and render that completed list 
//     - Check the HTML for example completed to-do list item (commented out)
// - Update the to-do count and completed to-do count in the headings

// When should we attach the event listener for clicking a to-do list item?
