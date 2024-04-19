document.addEventListener('DOMContentLoaded', function() {
    //função que adiciona as tarefas
    function addTask() {
        //primeira coisa é pegar o título da tarefa
        const taskTitle = document.getElementById('task-title').value;
        console.log(taskTitle);

        if (taskTitle) {
            //clonar o template
            const template = document.querySelector('.template');

            const newTask = template.cloneNode(true);

            // agora vou adicionar o título
            newTask.querySelector('.task-title').textContent = taskTitle;

            // agora vou remover as classes desnecessárias
            newTask.classList.remove('template');
            newTask.classList.remove('hide');

            //adicionar as tarefas na lista
            const list = document.getElementById('task-list');
            list.appendChild(newTask);

            // adicionar o botão de remover 
            const removeBtn = newTask.querySelector('.remove-btn');
            removeBtn.addEventListener('click', function() {
                removeTask(this);
            });

            // adicionar  evento de completar tarefa
            const doneBtn =  newTask.querySelector('.done-btn').addEventListener('click', function(){
               completetask(this)
            })


            //limpar texto
            document.getElementById('task-title').value = '';
        }
    }

    //função de remover tarefa
    function removeTask(task) {
        // Remover o elemento pai (a tarefa) do botão de remover
        task.parentNode.remove(true)
    }

    //função de completar tarefa
    function completetask(task){
        const taskComplete = task.parentNode
        taskComplete.classList.toggle('done')
    }

    // evento de adicionar tarefa
    const addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click', function(e) {
        e.preventDefault();
        addTask();
    });
});