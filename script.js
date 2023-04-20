//  Задание № 1

function minNum (a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}
console.log (minNum(2, 5));

// Задание №1 (тернальный оператор)

function minNumber(a, b) {
    return a < b ? a : b 

}
console.log(minNumber(2, 13));

// Задание № 2


function evenNotEven (n) {
    return (n % 2 == 0)? ('Число четное') : ('Число нечетное')
}

console.log (evenNotEven(20));

// Задание № 3.1
 function squareNumber1(c) {
    console.log (c ** 2);   
 }
squareNumber1(2);

// Задание № 3.2

function squareNumber2(c) {
    return (c ** 2);   
}
console.log(squareNumber2(6))

// Задание № 4

function age () {
    let year = Number(prompt('Сколько тебе лет?'));
    if (year < 0|| isNaN(year)) {
    alert('Вы ввели неправильное число');
} else if (year >= 0 && year <= 12) {
    alert('Привет, Друг!');
} else {
    alert('Добро пожаловать на сайт!')
}
}
age();

// Задание № 5 

function mult (a, b) {
    if (isNaN(a) || isNaN(b)) {
    return 'Одно или оба значения не являются числом';
    } else {   
    return (a * b)
}
}
console.log(mult(4, 10));

// Задание № 6

function cube () {
    let num = Number(prompt('Напиши число от 1 до 10'));
    if (isNaN(num)){
        alert ('Переданный параметр не является числом');
    } else {
        return (`${num} в кубе равняется ${num **3}`)
    }
}
console.log(cube())
