
const inputfield = document.getElementById('inputfield');
const addtodo = document.getElementById('addtodo');
const listBox = document.getElementById('todocontanier');
const clearList = document.querySelector('.clear-list');



const insertList = () =>{

    const todo = document.createElement('div');
    todo.classList.add('list');

    const listText = document.createElement('p');
    listText.classList.add('text-hidden')
    listText.innerHTML = inputfield.value;

    const icons = document.createElement('div');
    icons.classList.add('icon');

    const editicon = document.createElement('i');
    editicon.classList.add('fas', 'fa-edit');

    const trashicon = document.createElement('i');
    trashicon.classList.add('fas', 'fa-trash');
    
    icons.append(editicon, trashicon);
    todo.append(listText, icons);
    listBox.prepend(todo);

    listText.addEventListener('click', () => {

        listText.classList.toggle('text-hidden');
    });
    editicon.addEventListener('click', () => {

        listText.classList.toggle('checked');
    });
    
    trashicon.addEventListener('click', () => {
        todo.remove();
        if (listBox.innerHTML === "") {
            clearList.style.display = 'none';
        }
    });

}

const addNewToDoList = () => {

    if(inputfield.value.length > 0) {
        insertList();
        inputfield.value = "";
        clearList.style.display = 'block';
    }

    
}

const inputKeyEnter = (even) => {
    if(even.key === 'Enter'){
        addNewToDoList();
    }
}

const clearAllList = () => {
    listBox.innerHTML= "";
    clearList.style.display = 'none';

}
inputfield.addEventListener('keydown' ,inputKeyEnter);
addtodo.addEventListener('click', addNewToDoList);
clearList.addEventListener('clear',clearAllList);
























// list of task to do list task طريقه رقم 2 --------------------------------

// let inputfield = document.getElementById('inputfield');
// let todocontanier = document.getElementById('todocontanier');
// let addtodo = document.getElementById('addtodo');



// addtodo.addEventListener('click' , function(){
    
//     var paraghraph = document.createElement('p')
//     paraghraph.classList.add('paragraph-styling')
//     paraghraph.innerText =inputfield.value;
//     todocontanier.appendChild(paraghraph);
//         inputfield.value ="";
//         paraghraph.addEventListener('click' , function(){
//         paraghraph.style.textDecoration = "line-through";
//          })
//          paraghraph.addEventListener('dblclick' , function(){
//             todocontanier.removeChild(paraghraph);
//         })
//     } )
















// codeee el session ---------------------------------------
//      var list_of_task =[];
//     function add(){
// var task = document.getElementById("task").value;
// list_of_task.push(task);
// var task = document.getElementById("task").value ='';

// read();
//     }

// function read(){

// var size = list_of_task.length;
// var list =''; 
// for(var i=0; i<size;i++){
// list += "<li>" +list_of_task[i] + "</li>";
// }
// document.getElementById("tasks").innerHTML = list;

// }
// var closed =[];
//  function close(index){
//      closed.push(index);
//      console.log(closed);
//     var size = list_of_task.length;
//     var list =''; 
//     for(var i=0; i<size;i++){
//     list += "<li style=' text-decoration:line-through;' onclick='close("+i+")'>" +list_of_task[i] + "</li>";
//     }else{
//         list += "<li>" +list_of_task[i] + "</li>";
//     }
//     document.getElementById("tasks").innerHTML = list;
 
//  }
