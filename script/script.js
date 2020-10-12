'use strict';

/*Переменная lang может принимать 2 значения: 'ru' 'en'.
Написать условия при котором в зависимости от значения 
lang будут выводится дни недели на русском или английском языке.*/
//через if, 
let lang = prompt ('Выберите язык (ru/en)');

 if (lang === 'ru') {
     console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
 } else if (lang === 'en') {
     console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
 } else {
     console.log('Введено неправильное значение');
 }
 //через switch-case 
 switch (lang) {
     case 'ru':
         console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
         break;
    case 'en':
        console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
        break;
 }

 //через многомерный массив без ифов и switch.
 let days = [];
  days ['ru'] = ['Понедельник', 'Вторник', 'Среда', 
            'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  days ['en'] = ['Sunday', 'Monday', 'Tuesday', 
            'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let langUser = lang;
console.log(days[langUser]);

//№3
let namePerson = prompt ('Введите Ваше имя');

    let Person = 
    (namePerson === 'Артем') ? 'Директор' : 
    (namePerson === 'Максим') ? 'Преподаватель' :
    'Студент';
    console.log(Person);
