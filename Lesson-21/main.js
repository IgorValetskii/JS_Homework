//task 1
{
    let name = prompt('What is your name?');

    const user = {
        name,
        sayHi() {
            return (`Hi ${this.name}` ) ;
        }
    };

    user.sayHi();
}
//task 2
{
    function getNumber({a: x, b: y,}, z = 1) {
        console.log(x ** y * z);
    }

    getNumber({a: 2, b: 3});
}
//task 3
{
    const arr = ['Jack', 55];
    function getInfo(name, age) {
        console.log(`Hello, I'm ${name} and I'm ${age} years old.`);
    }

    getInfo(...arr);
}
//task 4
{
    function  getNumbers(...numbers) {
        for (let value of numbers) {
        console.log(value);
        }
    }

    getNumbers(1, 2, 3);
}
//task 5
{
    function countVowelLetters(text) {
        text = text.toLowerCase().split('');

        const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
        let counter = 0;

        text.forEach(element => vowelLetters.includes(element) && counter++);

        return counter;
    }

    countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12

}
// task 6

{
    function getUserInfo(users) {

        let youngUsers = users.filter(object => object.age < 40);

        let nameFedor = users.filter(object => object.name.includes('Fedor'));

        let result = { 'Пользователи младше 40': youngUsers,
            'Пользователь с именем Федор':nameFedor
        };

        return result;
    }

    const users =[
        {name: 'Vasya Pupkin', age: 25},
        {name: 'Ivan Petrov', age: 30},
        {name: 'Fedor Ivanov', age: 42}
    ];

    getUserInfo(users);
}

//Task 7

{
    function getUsersNames(usersNames) {
        let arrName = usersNames.map((elem,i) => ({[`Пользователь ${i+1}`]: elem}));
        return arrName;
    }

    const usersNames = ['Вася', 'Петя', 'Саша'];

    getUsersNames(usersNames);
}

// Task 8

{
    function combineToObj(arrObj) {
        let result = arrObj.reduce((total, item) => (Object.assign(total, item) ));

        return result;
    }

    const arrObj = [
        {name: 'Vasya'},
        {name: 'Piotr', age: 25},
        {salary: '2000$'}
    ];

    combineToObj(arrObj);
}

// Task 9
{
    class Animal {
        constructor(name) {
            this._foodAmount = 50;
            this.name = name;
        }


        _getFormattedFoodAmount() {
            return `${this._foodAmount} гр.`;
        }

        dailyNorm(amount) {
            if (!arguments.length) return this._foodAmount;

            if (amount < 50 || amount > 500) {
                return 'Недопустимое количество корма.';
            }

            this._foodAmount = amount;
        }

        feed() {
            return `Насыпаем в миску ${this._getFormattedFoodAmount()} корма.`;
        }
    }

    class Cat extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }

        feed() {
            console.log(`${super.feed()}
Кот доволен ^_^`);
            return this;
        };

        stroke() {
            console.log('Гладим кота.');
            return this;
        }
    }

    var barsik = new Cat('Барсик');

    console.log(barsik.feed().stroke().stroke().feed());

    barsik = null;
}