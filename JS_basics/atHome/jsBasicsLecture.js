// // 1. Запитайте у юзера скільки йому років: «Привіт мені - “” років!».
// let userAge = +prompt("Скільки вам років?");
// alert(`Привіт мені ${userAge} років!`);

// console.log(userAge);


// // 2. Запитайтесь якого року народження юзер, теперішній рік візьмемо за константу.

// let userBirthDate = +prompt('Який ваш рік народження?');

// const CURRENT_YEAR = 2021;
// if (userBirthDate != NaN && userBirthDate != null && userBirthDate != undefined && userBirthDate >= 2021) {
//     alert(false);
// } else {
//     alert(CURRENT_YEAR - userBirthDate);
// }

// // Виведемо скільки йому років.
// console.log(userBirthDate, CURRENT_YEAR, CURRENT_YEAR - userBirthDate)



// // 3. Запитайтесь у юзера довжини сторін прямокутника та виведіть його периметр.

// let firstSide = +prompt("Напишіть довжину сторони довільного прямокутника: ");

// let secondSide = +prompt("Напишіть довжину іншої сторони довільного прямокутника: ");

// let perimeter = (firstSide + secondSide) * 2;
// if (perimeter < 0) {
//     let negativeNumber = perimeter;
// } else if (firstSide && secondSide != NaN && firstSide && secondSide != null && firstSide && secondSide != negativeNumber && firstSide && secondSide != undefined) {
//     alert(perimeter);
// } else {
//     alert(`Не вірні дані`);

// };

// console.log(firstSide, "firstSide")
// console.log(secondSide, "secondSide");

// 4. Запитайтесь в юзера радіус кола та виведіть його площу.(число пі)

let circleRadius = +prompt("Напишіть довжину радіуса довільного кола: ");

if (circleRadius == NaN) {
    alert('Не вірні дані', `$(circleRadius)`);
} else if (circleRadius <= 0) {
    alert(`Не вірні дані $(circleRadius)`);
} else {
    let circleArea = Math.PI * circleRadius ** 2;
    alert(`Площа кола ${circleArea}`);
};
console.log(circleArea)