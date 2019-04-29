import Utils from '../../../helpers/Utils.js';

import Component from '../../../views/Component.js';

import Tasks from '../../../models/Tasks.js';

class TasksList extends Component {
    constructor() {
        super();

        if (!this.tasks) {
            this.tasks = new Tasks().getDefaultTasks();
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }

    render() {
        return new Promise(resolve => {
            const sumTasks = localStorage.getItem('sumTasks');
            resolve(`
                           
                <h1 class="page-title">Tasks List</h1>
                
                <div class="task-add">
                    <input class="task-add__title" type="text">
                    <button class="task-add__btn-add button" disabled>Add Task</button>
                    <button class="task-add__btn-clear-list button" >Clear List</button>
                </div>       
                  
                <div class="tasks-list">               
                    <div class="tasks">
                        ${this.tasks.map(task => this.getTaskHTML(task)).join('\n ')}
                    </div>
                </div>   
                <div>    
                    <p> Tasks total: ${sumTasks ? sumTasks : (this.tasks.length)}  </p> 
                </div>         
            `);
        });
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        const tasksList = document.getElementsByClassName('tasks-list')[0],
              addTaskInput = document.getElementsByClassName('task-add__title')[0],
              addTaskBtn = document.getElementsByClassName('task-add__btn-add')[0],
              addTaskBtnClearList = document.getElementsByClassName('task-add__btn-clear-list')[0];

        addTaskInput.addEventListener('keyup', () => addTaskBtn.disabled = !addTaskInput.value.trim());
        addTaskBtn.addEventListener('click', () => this.addTask(tasksList, addTaskInput, addTaskBtn));
        addTaskBtnClearList.addEventListener('click', () => this.clearList(tasksList));

        tasksList.addEventListener('click', event => {
            const target = event.target,
                targetClassList = target.classList;

            if (targetClassList.contains('task') || targetClassList.contains('task__title')) {
                this.redirectToTaskInfo(target.dataset.id);
            }

            if (targetClassList.contains('task__btn-remove')) {
                this.removeTask(target);
            }
        });
    }

    addTask(tasksList, addTaskInput, addTaskBtn) {
        const title = addTaskInput.value.trim(),
            id = Utils.generateID();

        const newTask = {
            id,
            title,
            status: 'In Progress'
        };

        this.tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));

        tasksList.insertAdjacentHTML('beforeEnd', this.getTaskHTML(newTask));

        this.clearAddTask(addTaskInput, addTaskBtn);
    }

    getTaskHTML(task) {
        return `
            <div class="task" data-id="${task.id}">
                <a class="task__title" data-id="${task.id}">${task.title}</a>

                <div class="task__buttons">
                    <a class="task__btn-edit button" href="#/task/${task.id}/edit">Edit</a>
                    <a class="task__btn-done button">Done</a>
                    <a class="task__btn-remove button">Remove</a>
                </div>
            </div>
        `;
    }

    clearAddTask(addTaskInput, addTaskBtn) {
        addTaskInput.value = '';
        addTaskBtn.disabled = true;
    }

    redirectToTaskInfo(id) {
        location.hash = `#/task/${id}`;
    }

    removeTask(target) {
        if (confirm('Are you sure?')) {
            const taskContainer = target.parentNode.parentNode;

            this.tasks = this.tasks.filter(task => task.id !== taskContainer.dataset.id);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));

            taskContainer.remove();
        }
    }

    clearList(tasksList) {
        if (confirm('Are you sure?')) {
            tasksList.remove();
            localStorage.clear();
        }
    }
}

export default TasksList;