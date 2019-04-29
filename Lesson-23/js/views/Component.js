import Utils from '../helpers/Utils.js';

class Component {
    constructor() {
        this.request = Utils.parseRequestURL();
        // обращаемся к пулеченному объекту request из util передаем в this.request
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
        // по ключу tasks получаем значение из localstorage, Вызов JSON.parse(str) превратит строку с данными в формате JSON в JavaScript-объект/массив/значение.,
        // передаем в this.tasks.
    }

    afterRender() {}
}

export default Component;