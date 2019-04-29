class Utils {
    static parseRequestURL() {
        const url = location.hash.slice(1),
            // метод hash возвращает часть урла идущего после # включительно  и берутся все элементы, начиная с номера 1 то есть без # ( метод slice)
            request = {};

        [, request.resource, request.id, request.action] = url.split('/');
        // методом split превращаем строку на массив разбив ее по разделителю /
        // "/" пропускаем, присваиваем значение task в свойство resource
        return request;

}

    static generateID() {

        return Math.random().toString(36).substr(2, 10);
        // генерируем случайное id  в 36 ричное значение с длинной от 2 до 10 символов
    }
}

export default Utils;