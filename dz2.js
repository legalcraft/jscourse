
//Проверка на undefined
function checkUndef(smth) {
    return typeof smth === 'undefined';    
}

//Проверка на null
function checkNull() {
    if (typeof smth === 'null') {
        alert('Null!');
    } 
}

//Проверка на Nan
function checkNan(smth) {
    return isNaN(smth);
}

//Проверка, что объект пустой
function checkEmpty(obj) {
    return Object.keys(obj).length === 0;
}

//Случайное целое число из диапазона
function randomNumber(min, max) {
    rand = Math.random() * (max - min) + min;
    return Math.floor(rand);
}

//Глубокое сравнение объектов
obj1 = {};
obj2 = {};
function deepCompare(obj1, obj2) {
    return obj1 === obj2;
}

//Удаление всех свойств из объекта
var myObject = {a:1, b:2, c:3}
function deleteAll(obj) {
    for (key in obj) {
        delete(obj.key);
    }
}

//Преобразование значения всех свойств (не решено)
function transferIt() {
    
}


