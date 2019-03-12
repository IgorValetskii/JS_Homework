// Task 1
function isPalindrome(word) {
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
}

isPalindrome('кАЗАК');

// Task 2
function isAnagram(wordOne, wordTwo) {
    return wordOne.toLowerCase().split('').sort().join('') === wordTwo.toLowerCase().split('').sort().join('')
}

isAnagram('шмот', 'отшМ');

// Task 3
function divideArr(a, b) {
    var newArr = [];
    for (var i = 0; i < a.length; i += b) {
        newArr.push(a.slice(i, i + b));
    }
    return newArr;
}

divideArr([1, 2, 3, 4, 5, 6, 7], 3);

// Task 4
function vowelsCount(text) {
    var vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я', 'a', 'e', 'i', 'o', 'u', 'y'],
        counter = 0;
    for (var i = 0; i < text.length; i++) {
        if (vowels.indexOf(text[i]) != -1) {
            counter++;
        }
    }
    return counter;
}

