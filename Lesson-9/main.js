// Task Prototype
function Animal(name) {
    this._foodAmount = 50;
    this.name = name;
}

Animal.prototype._getFormattedFoodAmount = function() {
    return this._foodAmount + 'гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this._foodAmount;

    if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
};


Animal.prototype.feed = function() {
    return 'Насыпаем в миску ' + this._getFormattedFoodAmount() + ' корма.';
};

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.feed = function() {
    var result = Animal.prototype.feed.apply(this, arguments);
    console.log(result + '\n' + 'Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');
    return this;
};

var barsik = new Cat('Барсик');

console.log(barsik.feed().stroke().stroke().feed());



barsik = null;

// TASK toClone

function toClone(objToClone) {
    var newObjOrArray = Array.isArray(objToClone) ? [] : {};

    for ( var key in objToClone) {
        var value = objToClone[key];

        newObjOrArray[key] = (typeof value === 'object' && value !== null ) ? toClone(value) : value;
    }
    return newObjOrArray ;
}

var objectTest = {
    name : 'samsung',
    serialNumber : 25,
    boolean : false,
    object1 : {
        array : [ 1, 2, 3],
        object2 : {
            color : 'blue'
        }
    }
};

var clone1 = toClone(objectTest);

clone1.boolean = true;
clone1.object1.object2.color = 'red';
clone1.object1.array.unshift(0);

console.log(objectTest);
console.log(clone1);
