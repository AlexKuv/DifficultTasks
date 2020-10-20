'use strict';

let arr = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];


let getWeekDay = function (date) {
    date = new Date();
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let toDay = date.getDay();
    
    return days[toDay];
    
};
getWeekDay();

//А)
 function aDate() {
    let s;
    let t=new Date();
    let y=t.getFullYear();
    let d=t.getDate();
    let mon=t.getMonth();
    switch (mon)
    {
      case 0: s="января"; break;
      case 1: s="февраля"; break;
      case 2: s="марта"; break;
      case 3: s="апреля"; break;
      case 4: s="мае"; break;
      case 5: s="июня"; break;
      case 6: s="июля"; break;
      case 7: s="августа"; break;
      case 8: s="сентября"; break;
      case 9: s="октября"; break;
      case 10: s="ноября"; break;
      case 11: s="декабря"; break;
    }
    let result1=d+" "+s+" "+y;

    document.querySelector('.data')
    .innerHTML='Сегодня ' + getWeekDay() + ','+ result1 + ' года ' + ' ';
    

    } 
aDate();


let declOfNum = function(number, words) {  
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
};


 let timeA = function (s) {

    let t=new Date();
    let h=("0" + t.getHours()).slice(-2);
    let m=("0" + t.getMinutes()).slice(-2);
    s=("0" + t.getSeconds()).slice(-2);
    let resultTime= h + '' + declOfNum(h,[' час ', ' часа ', ' часов '])+ 
    m+''+ declOfNum(m,[' минута ', ' минуты ', ' минут '])+
    s+''+declOfNum(s,[' секунда', ' секунды', ' секунд']) + '<br>';

    document.querySelector('.clock').innerHTML=resultTime;
   
    };

    
    setInterval(timeA,1000);
    timeA();


//Б)
function nTime() {
    let t=new Date();
    let h=("0" + t.getHours()).slice(-2);
    let m=("0" + t.getMinutes()).slice(-2);
    let s=("0" + t.getSeconds()).slice(-2);
    let resultTime=h+":"+m+":"+s;
    
 
  function tData() {
    let t=new Date();
    let y=t.getFullYear();
    let d=("0" + t.getDate()).slice(-2);
    let mon=t.getMonth()+1;
    let mon1 = ("0" + mon).slice(-2);
    
    
    let result=d+" "+mon1+" "+y;

    document.write(result + '-' + resultTime);
  }
  tData();
    
}

nTime();


