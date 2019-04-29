import Utils from '../helpers/Utils.js';

class Tasks {
    constructor() {
        this.defaultTasks = [
            {
                id: Utils.generateID(),
                title: 'Task 1',
                status: 'In Progress',
                description: 'Urgently'
            },
            {
                id: Utils.generateID(),
                title: 'Task 2',
                status: 'In Progress',
                description: 'Urgently'
            },
            {
                id: Utils.generateID(),
                title: 'Task 3',
                status: 'In Progress',
                description: 'Urgently'
            },
            {
                id: Utils.generateID(),
                title: 'Task 4',
                status: 'In Progress',
                description: 'Urgently'
            },
            {
                id: Utils.generateID(),
                title: 'Task 5',
                status: 'In Progress',
                description: 'Urgently'
            }
        ];
    }

    getDefaultTasks() {
        return this.defaultTasks;
    }
}

export default Tasks;