
// ДЗ 1, задача 1

function z1(a,b){
    if ((typeof a === 'number') && (typeof b === 'number')) {
        if (a > b) {console.log('True');}
        else {console.log('False');}
    }
    else {console.log('Даже не ври, что ввел два числа!');}
}

//ДЗ 1, задача 2

function z2(a){
    if (typeof a === 'string') {
        console.log('Вы ввели *' + a + '*');}
    else {
        console.log('Введи наконец-таки строку!');}   
}

//ДЗ1, задача 3

function z3(a){
    if ((typeof a === 'null') || (typeof a === 'undefined')){
        console.log(typeof a );} 
    else { console.log('Какой-то другой тип!');}
}

//ДЗ1, задача 4
var object = {};
function z4(obj){
    obj.checked = true;}

//ДЗ1, задача 5
function z5(a){
    if (typeof a === 'number'){
        if (a <= 0){for (i = 0; i >= a; i--){console.log(i);}}
        if (a > 0){for (i = 0; i <= a; i++){console.log(i);}}
    }
    else {console.log('Введите число!');}
}

