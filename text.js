let toDos = [];
let completedToDos = [];

const input = document.querySelector('#inputBox')
const form = document.querySelector('.toDoForm')

const toDoList = document.querySelector('.toDoList')
const completedList = document.querySelector('.completedList')

form.addEventListener('submit', checkInput = (event) => {

    event.preventDefault()
    let userInput = input.value
  if(userInput){
      toDos.push(userInput)
      addToList()
  }
userInput.value = ''
})



function addToList(){
    toDoList.innerHTML = ''
for (let i = 0; i < toDos.length; i++){
show(toDos[i])
}
document.querySelector("#toDoCount").innerText = toDos.length;
}

function show(userInput){
const li = document.createElement('li');

li.classList.add('toDoItem');   
li.innerText = userInput
toDoList.appendChild(li);
}

const toDoItem = document.querySelector('.toDoItem')
toDoItem.addEventListener('click', removeToDo)

function removeToDo(){
    toDoItem.remove()
}


// 1- quand l'user click sur tdl item

// 2- retirer to-do de la list et de l'array

//3 - ajouter to do a la completed to-dos array refaire la completed liste

//4 faire le counter pour la tdl

// 5 faire le conter pour la completed list















// 2. COMPLETE TO-DOS

// When the user clicks a to-do list item

// - Remove that to-do from the to-do array and list
// - Add that to-do to a completed to-dos array and render that completed list 
//     - Check the HTML for example completed to-do list item (commented out)
// - Update the to-do count and completed to-do count in the headings

// When should we attach the event listener for clicking a to-do list item?
