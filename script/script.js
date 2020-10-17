'use strict';

let arr = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];


let getWeekDay = function (date) {
    date = new Date();
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let toDay = date.getDay();

    return days[toDay];
};
let date = new Date();

getWeekDay(date);

for (let i = 0; i < arr.length; i++ ) {

    if (arr[i] === getWeekDay(date) ){
        document.write(getWeekDay(date).bold().italics()+ '<br>');
    } else 
    if (arr[i] === 'Суббота'){
    document.write( 'Суббота'.italics() + '<br>');
    } else 
    if (arr[i] === 'Воскресенье') {
        document.write ('Воскресенье'.italics() + '<br>');
    } 
    else  {
        document.write (arr[i] + '<br>');
    }
   
}

