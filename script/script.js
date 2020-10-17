'use strict';

let arr = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];

let toDay = new Date().getDay()-1;

for (let i = 0; i < arr.length; i++ ) {

    if (i === toDay ){
        document.write(arr[i].bold().italics()+ '<br>');
    } else 
    if (i === 5){
    document.write( arr[5].italics() + '<br>');
    } else 
    if (i === 6) {
        document.write (arr[6].italics() + '<br>');
    } 
    else  {
        document.write (arr[i] + '<br>');
    }
   
}

