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
