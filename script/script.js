'use strict';
//1) Создать переменную num со значением 266219 (тип данных число)
 const num = 266219;

//2) Вывести в консоль произведение (умножение) цифр этого числа
 const arr = num.toString().split('');

 
 const result = (accumulator, currentValue) =>accumulator * currentValue ;
    console.log(arr.reduce(result));
/*3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)*/
const sum = Number(arr.reduce(result));
const degree = sum ** 3;
console.log(degree);

//4) Вывести на экран первые 2 цифры полученного числа
const sub = String(degree);
console.log(sub.substring(0,2));
