const input = document.querySelector('#taker');
const addbtn = document.getElementById('addbtn');
const todolist = document.getElementById('todolist')
let ctr = 1;

function deletebtn(toDel){
    const y = document.getElementById(toDel);
    y.parentNode.removeChild(y);
}


addbtn.addEventListener('click', ()=>{
    const value = input.value.trim();
    if(!value){
        alert('please enter something');
        return;
    }
    const checker = document.createElement('button');
    const newtodo = document.createElement('h4');
    const remove = document.createElement('button');
    const container = document.createElement('div');
    const left = document.createElement('div');
    container.setAttribute('id', `todo-${ctr}`);

    newtodo.classList.add('todo-text')
    checker.classList.add('todo-check')
    remove.classList.add('todo-delete')
    container.classList.add('todo-container')
    left.classList.add('todo-left')

    newtodo.textContent = value ;
    remove.textContent = 'Delete';

    left.appendChild(checker)
    left.appendChild(newtodo)
    container.appendChild(left)
    container.appendChild(remove)
    todolist.appendChild(container)

    let id = `todo-${ctr}`;
    remove.onclick = ()=>{deletebtn(id)};
    checker.onclick = ()=>{checkbtn(checker, newtodo)}

    ctr = ctr + 1;
    input.value = '';
})

function checkbtn(c, w){
    w.classList.toggle('todo-text-active')
    c.classList.toggle('todo-check-active')
}
 