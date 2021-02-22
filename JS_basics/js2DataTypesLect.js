// 1. Порівняти 2 рядки без урахування регістру.

// let a = "some string";
// let b = "some String";

// console.log(a.toLocaleLowerCase() === b.toLocaleLowerCase());
//виведе true на консоль (інспектор в браузері)

// 2. Зробити з заданого рядка - масив. “Морква, картопля,
// буряк”.

//  let newArr = “Морква, картопля, буряк”;

//  let newArr = str.split(separator: ', '); 
// console.log(newArr); //[“Морква", "картопля", "буряк”]

// let newStr = newArr.join('-'); // “Морква-картопля-буряк”
// console.log(newArr); // “Морква-картопля-буряк”


// 3. Емуляція гри в кубики, юзер клацає на конфірм та отримує
// 2 результати ( кубики стандартні 1-6 значення на них.)
// Якщо випадає 2 шестірки , вивести додаткове повідомлення
// що це - джекпот!


// let min = 1;
// let max = 6;

// let dice = {}; //create empty object

// let result = []; //create empty array

// console.log(dice);
// console.log(result);

// let question = confirm("Roll the dice?");
// console.log(question);

// if (question == true) {

//     dice.cube1 = Math.floor(Math.random() * (max - min + 1)) + min;
//     dice.cube2 = Math.floor(Math.random() * (max - min + 1)) + min;
//     if (dice.cube1 === 6 && dice.cube2 === 6) {

//         alert("Jackpot!!!")

//     } else {

//         a = dice.cube1;
//         b = dice.cube2;
//         result = [a, b];

//         console.log(result.join(' and '));

//         alert(`Your numbers are ${result.join(' and ')}`)

//     }
// } else {
//     alert("Try next time?")
// };

// console.log(dice);
// console.log(result);




// 4. Створіть програму яка запитує у юзера 2 значення та
// виводить рандомно число між цими 2 значеннями.

// let message = alert("Let's find some random number");
// let num1 = +prompt('Write some integer number');
// let num2 = +prompt('Write some another integer number');


// let min = 0;
// let max = 0;
// let result = 0;

// console.log(num1, "num1 start");
// console.log(num2, "num2");
// console.log(min, "min");
// console.log(max, "max");
// console.log(result, 'result');



// if (num1 === 0 && num2 === 0 && num1) {
//     alert("Wrong numbers! Please, give us two different integer numbers.");
// } else if (Number.isInteger(num1, num2) == false) {
//     alert("Wrong numbers! Please, give us two different integer numbers.");
// } else if (num1 != undefined && num2 != undefined && num1 != NaN && num2 != NaN) {
//     if (num1 > num2) {
//         min = num2;
//         max = num1;
//         result = Math.floor(Math.random() * (max - min + 1)) + min;
//         alert(`Your random number is ${result}`);

//         console.log(num1, "num1<");
//         console.log(num2, "num2>");
//         console.log(min, "min - num1");
//         console.log(max, "max - num2");
//         console.log(result, 'result');
//     } else if (num1 < num2) {
//         min = num1;
//         max = num2;
//         result = Math.floor(Math.random() * (max - min + 1)) + min;

//         alert(`Your random number is ${result}`);

//         console.log(min, "min - num1");
//         console.log(max, "max - num2");
//         console.log(result, 'result');

//     } else if (num1 === num2) {
//         alert("It's the same numbers. Please give us two different numbers.");

//         console.log(num1, num2, "num1 === num2");

//         console.log(min, max, "min  === max");
//         console.log(result, 'result');

//     } else {
//         alert("Wrong numbers! Please, give us two different integer numbers.")
//     }
// } else {
//     alert("Wrong numbers! Try next time to put in form two different integer numbers.");
// };

// console.log(num1, "num1 end");
// console.log(num2, "num2 end");
// console.log(min, "min end");
// console.log(max, "max end");
// console.log(result, 'result end');



// 5. Створити масив у якому буде 3 юзера описані як обєкти з
// такими полями - age, name, hobby (теж повинно бути
// масивом ).

// let Arr = [{
//     age1: 90,
//     name1: "Fred",
//     hobby1: ["chess", "swimming"]
// }, {
//     age2: 30,
//     name2: "Masha",
//     hobby2: ["basketball", "drawing", "traveling"]
// }, {
//     age: 20,
//     name: "John",
//     hobby: ["dance", "writing", "films"]
// }];

// console.log(Arr);



// 6. Проекспериментувати з типами даних.


// Math.random(); // 0.9110326761260074 - random number from 0 to 1 [0; 1)
// console.log(Math.random());


// let y = -10.8275;
// Math.floor(y); //-11  - виводить найбільше ціле число, яке < чи = аргументу (число в дужках)
// console.log(Math.floor(y));


// let x = 3.346571;
// Math.round(x); // 3  - rounded to the nearest integer.
// console.log(Math.round(x));

// let fixer = 7873.56712;
// fixer.toFixed(4); // 7873.5671  - math rounding four number after . rounded
// console.log(fixer.toFixed(4));

// let intgr = 754.79;
// Number.isInteger(intgr); // false - not an integer
// console.log(Number.isInteger(intgr));

// let arr = 'algh'
// Array.isArray(arr); // false - the argument is not an array
// console.log(Array.isArray(arr));

// let num = '4'
// isNaN(num); // false  - take '4' not a NaN 
// console.log(isNaN(num));

// let upCase = 'js data types'
// upCase.toUpperCase(); //JS DATA TYPES
// console.log(upCase.toUpperCase());

// let tlc = 'JS DATA TYPES';
// tlc.toLowerCase(); //js data types
// console.log(tlc.toLowerCase());

// let indof = ['abc', 'bcd', 'cde', 'edc', 'dcb', 'cde']
// indof.indexOf('cde'); // 2 - the first index (or -1 if it's not found) of the element (argument) of the array
// console.log(indof.indexOf('cde'));

// let theArr = ['a', 'b', 'c', 'd']
// theArr.includes('d'); //true - array includes the value 'd'
// console.log(theArr.includes('d'));


// let str = 'return last element of a str'
// str[str.length - 1]; //r - the last element of a string (str)
// console.log(str[str.length - 1]);

// let someStr = 'return array of a variable'
// someStr.split();
// console.log(someStr.split());

// let arrJ = ['creates and', 'returns', 'a new string', 'by concatenating all of the elements in an array']
// arrJ.join(' '); //... - give as a string from an array
// console.log(arrJ.join(' '));

// let strTrim = '    removes whitespace    from both ends of a string     '
// strTrim.trim(); //... - cut whitespaces (but not in the midle of a string)
// console.log(strTrim.trim());



// 7. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі конвертації - у долар, євро, нафту(brent), золото. Додатково зробити перевірку чи не обманює вас юзер і перевіряти чи не прийшов вам null or undefined.

// let uah = +prompt("How much money (UAH) do you have?")
// console.log(uah)

// let usd_uah = 27.40; // dollar exchange rate
// let euro_uah = 33.03; // euro rate
// let brent_uah = 54.20; // brent rate
// let goldGram_uah = 1050; // gold rate

// // create variables to contain results
// let uah_usd = 0;
// let uah_euro = 0;
// let uah_brent = 0;
// let uah_gold = 0;

// if (uah === null && uah === undefined && uah === NaN && uah < 0) {
//     alert("Wrong number")
// } else if (uah > 0) {
//     uah_usd = uah / usd_uah;
//     usd = uah_usd.toFixed(2);
//      console.log(usd);

//     uah_euro = uah / euro_uah;
//     euro = uah_euro.toFixed(2);
//      console.log(euro);

//     uah_brent = uah / brent_uah;
//     brent = uah_brent.toFixed(2);
//      console.log(brent);

//     uah_gold = uah / goldGram_uah;
//     goldGram = uah_gold.toFixed(0);
//      console.log(goldGram);

//     alert(`Exchange rate: for 1 USD - ${usd_uah} UAH; for 1 Euro - ${euro_uah} UAH; for 1 galone of crude oil (Brent) - ${brent_uah} UAH; for 1 gram of Gold - ${goldGram_uah} UAH`);

//     alert(`You can buy USD: ${usd} or Euro: ${euro} or  Brent Crude oil ${brent} or Gold: ${goldGram} gram`);
// } else {
//     alert("Good luck! Try next time");
// };

// 8. Спитатись у юзера суму замовлення і вивести результат з урахуванням знижки : до 500 гривень знижка -1 %, від 500 до 1000 - 5%, більше 1000 - 10% та подарунковий сертифікат на 200 гривень у подарунок! 

// let order = +prompt('What is the amount of your order (in UAH)?', 'UAH');
// let result = 0;
// let count = 0;
// console.log(order);

// if (order == null || order == undefined || order == NaN || order <= 0) {
//     alert("Wrong number")
//      console.log(order);
// } else if (order > 0 && order < 500) {
//     count = order - (order * 0.01);
//      console.log(count);
//     result = count.toFixed(2);
//      console.log(result);
//     alert(`Your order is ${order} UAH. Congratulation, you have 1% discount! The amount to pay is ${result} UAH.`);
// } else if (order >= 500 && order <= 1000) {
//     count = order - (order * 0.05);
//      console.log(count);
//     result = count.toFixed(2);
//      console.log(result);
//     alert(`Your order is ${order} UAH. Congratulation, you have 5 % discount! The amount to pay is ${result} UAH.`);
// } else if (order > 1000) {
//     count = order - (order * 0.1) - 200;
//      console.log(count);
//     result = count.toFixed(2);
//      console.log(result);
//     alert(`Your order is ${order} UAH. Congratulation, you have 10 % discount and a certificate for 200 UAH as a present! The amount to pay is ${result} UAH.`);
// } else {
//      console.log(order);
//     alert('Sorry, not such a number.');
// }


// 9. Створити тест на знання будь-чого, юзер має відповісти на 5 питань, вірна відповідь - 1 бал, якщо юзер відповість правильно на всі 5 запитань - додатково додати 1 бонусний бал. 


let question = confirm("Let's start some test!");

let answer1 = 0;
let answer2 = 0;
let answer3 = 0;
let answer4 = 0;
let answer5 = 0;
let answerBonus = 0;

let count = 0;
let result = 0;

if (question = true) {
    answer1 = +prompt("What is the method to determine whether the passed value is an integer ?
        1. integerNumber(); 2. Number.isInteger(); 3. Is.integer(); 4. numberInt()
        ", "
        Write the number of correct answer(1, 2, 3 or 4)
        ");

    }
    else {
        alert("Have a nice day!")
    }




    2. How to determine whether an array includes a certain value among its entries ? .includes()

    3. What is the method to make array from the string(name of the variable is "str") ? str.split()

    4. Is join() a method that creates and returns a new string by concatenating all of the elements in an array ?

        5. How to
    return last element of a string(varibable name is 'str') ? str[str.length - 1]

    Bonus question.What does "Math.floor(Math.random() * (max - min + 1)) + min"
    do ?



        // 10. Запитатись у користувача 3 значне число та сказати чи є у ньому однакові цифри 

        let test = +prompt('Give us some three-digit number.', 'three-digit number');



    // 11. Запитатись у юзера одну кнопку від 1 до = на клавіатурі та вивести що буде при нажиманні цифри разом з шифтом.