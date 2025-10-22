const add_task = document.getElementById("add_task")

add_task.addEventListener("click",(e)=>{
    const title_task = document.getElementById("title_task").value
    const desc_task = document.getElementById("desc_task").value
    const div_task = document.createElement("div")
    const p_title_task = document.createElement("p")
    const p_desc_task = document.createElement("p")
    p_title_task.innerHTML = title_task
    p_desc_task.innerHTML = desc_task
    div_task.appendChild(p_title_task)
    div_task.appendChild(p_desc_task)
    document.body.appendChild(div_task)
})