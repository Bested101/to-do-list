let form = document.forms[0]
let input = document.querySelector(".input")
let tasks = document.querySelector(".tasks")

form.onsubmit = (e)=>{
  e.preventDefault();
  if (input.value){
    let taskCont = document.createElement("div")
    let task = document.createElement("p")
    let del = document.createElement('button')
    let taskNode = document.createTextNode(input.value)
    task.append(taskNode)
    del.innerHTML = "Delete"
    taskCont.append(task , del)
    tasks.appendChild(taskCont)
    input.value = ""
  }
  localStorage.setItem("tasks" , tasks.innerHTML)
}

document.addEventListener("click" , (e)=>{
  if (e.target.innerHTML == "Delete"){
    e.target.parentElement.remove()
    localStorage.setItem("tasks", tasks.innerHTML);
  }
})

if (localStorage.getItem("tasks")){
  tasks.innerHTML = localStorage.getItem("tasks");
}