'use strict';
// task#1
const x = 10; 
const y = 7;

x > y ? console.log(`x больше, чем y`) : console.log(`x не больше, чем y`);

// task#2
const userNumber = prompt(`Введите число`);

if(userNumber % 2 === 0){
    console.log(`число ` + userNumber + ` четное`)
} else {
    console.log(`число ` + userNumber + ` нечетное`)
}

// task#3
const userNumb = prompt(`Введите число`);

if(!isNaN(userNumb) && userNumb !== null ) {
    userNumb > 0 ? console.log(`число ${userNumb} ${userNumb.length}-значное положительное`) : console.log(`число ${userNumb} ${userNumb.length-1}-значное отрицательное`);
} else (console.log(`err`));


// task#4
const firstNumber = +prompt();
const secondNumber = +prompt();
const thirdNumber = +prompt();

if(!isNaN(firstNumber) && !isNaN(secondNumber) && !isNaN(thirdNumber)){

    if(firstNumber > secondNumber && firstNumber > thirdNumber){
        console.log(firstNumber);
    }else if (secondNumber > firstNumber && secondNumber > thirdNumber){
        console.log(secondNumber);
    }else if ( thirdNumber > firstNumber && thirdNumber > secondNumber){
        console.log(thirdNumber);
    } else (console.log(`ошибка, введите число`)); 
}
// task#5
const firstSideTriangle = +prompt();
const secondSideTriangle = +prompt();
const thirdSideTriangle = +prompt();

if(firstSideTriangle + secondSideTriangle > thirdSideTriangle ) {
    console.log(`Triangle is greate!`)
} else if (firstSideTriangle + thirdSideTriangle > secondSideTriangle ) {
    console.log(`Triangle is greate!`)
} else if(secondSideTriangle + thirdSideTriangle  > firstSideTriangle){
    console.log(`Triangle is greate!`)
} else ( console.log(`err`))
