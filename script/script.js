'use strict';

let arr = ['2315', '15456', '45582', '21458', '456', '8896', '588623'];

for (let i = 0 ; i < arr.length; i++) {
    if (arr[i].substring(0,1) === '2' || arr[i].substring(0,1) === '4'){
        console.log(arr[i]);
    }
}


PrimeNumber:
for (let i = 2; i < 100; i++){
    for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j === 0) {
        continue PrimeNumber; // не подходит, берём следующее
    }
  }

  console.log(i , 'Делители этого числа 1 и', i);
}
