/*Практическое задание 4:
    Создать класс Animal. Перенести в него все свойства и методы. Сделать метод getFormattedFoodAmount
    защищенным. Отнаследоваться внутри Cat от Animal.
    Расширить метод feed для кошек. Теперь он должен выводить в консоль информацию вида:
      "Насыпаем в миску (количество) грамм корма.
      Кот доволен ^_^"
    Использовать вызов родительского метода вида animalFeed() и сохранение контекста this через переменную.
    Все вызовы, которые работали ранее, должны по-прежнему работать корректно.*/


function Cat(name) {
    Animal.apply(this, arguments);

    var newFeed = this.feed;

    this.feed = function () {
        return newFeed() + 'Кот доволен ^_^ ';
    };
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm());
console.log(barsik.feed());

console.log(barsik.dailyNorm(600));
console.log(barsik.feed());

console.log(barsik.dailyNorm(250));
console.log(barsik.feed());

barsik = null;

function Animal(name) {
    this._foodAmount = 50;

    var self = this;

    this._getFormattedFoodAmount = function () {
        return self._foodAmount + 'гр.';
    }

    this.dailyNorm = function (amount) {
        if (!arguments.length) return self._foodAmount;

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        self._foodAmount = amount;
    };

    this.name = name;

    this.feed = function () {
        return 'Насыпаем в миску ' + self._getFormattedFoodAmount() + ' корма.';
    };
}

var animal = new Animal();

console.log(animal.name);

console.log(animal.dailyNorm());
console.log(animal.feed());

console.log(animal.dailyNorm(600));
console.log(animal.feed());

console.log(animal.dailyNorm(300));
console.log(animal.feed());


// Практическое задание 5:
// Добавить метод stroke, который будет выводить в консоль информацию "Гладим кота.".
//     Доделать метод feed таким образом, чтобы можно было цепочкой вызывать его и метод stroke в любой
// последовательности и сколько угодно раз.
// (Лишние логи можно убрать).

function Cat(name) {
    Animal.apply(this, arguments);

    this.stroke = function() {
        console.log('Гладим кота');
        return this;
    }

    var newFeed = this.feed;

    this.feed = function() {
        console.log(newFeed() + '\n' + 'Кот доволен ^_^ ');
        return this;
    };
}

var barsik = new Cat('Барсик');

barsik.stroke().stroke().stroke().feed().feed().stroke();


function Animal(name) {
    this._foodAmount = 50;

    var self = this;

    this._getFormattedFoodAmount = function () {
        return self._foodAmount + 'гр.';
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) return self._foodAmount;

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        self._foodAmount = amount;
    };

    this.name = name;

    this.feed = function() {
        return 'Насыпаем в миску ' + self._getFormattedFoodAmount() + ' корма.';
    };
}

var animal = new Animal();
