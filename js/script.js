"use strict";

// ==========================================    циклы

// задача №1

/* 
let number = 1;
while (number < 6) {
  console.log(number);
  number++;
}
 */

// задача №3

/* 
let num = 0;
while (num < 3) {
  console.log(`Число: ${num}`);
  num++
}
 */

// задача №4

/* forFirst: for (let num = 0; num < 2; num++) {
  for (let size = 0; size < 3; size++) {
    console.log(size);
    if (size == 1) {
      break forFirst;
    }
  }
}
 */



// ==========================================    тип данных  Number

//Задача №1. Получить верное значение округления

/* 
let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne); 
*/


// Задача №2. Получить число 135.58 из строки

/* 
let value = "135.58px";
console.log(parseFloat(value))
*/


// Задача №3. Посттроить верное условное ветвление

/* 

let value = 58 + "Фрилансер";
if (isNaN (value)) {
  console.log("Результат выражения NaN");
}

*/


// Задача №4.  Найти максимальное число из 10,58,39,-150,0

/* 
// console.log(Math.max(10,58,39,-150,0));
*/


// Задача №5. Округлить число 58.858 до числа 58

/* 
let num = 58.858;
console.log(Math.floor(num));
*/


// ==========================================    тип данных  String


/*
// Задача №1. Верна ли запись?
let fls = "фрилансер";
let text = 'Привет! Я ${fls}';
// Ожидаем получить Привет! Я фрилансер
console.log(text);

не верно. чтобы получить ожидаемый результат, нужно содержимое переменной text  записывать  в обратных кавычках

// Задача №2. Получить символ "н" строки:
let text = 'фрилансер';

console.log(text[5]);

// Задача №3. Верно?
let text = 123 + "456";
// Ожидаем 579
console.log(text);

не верно. в результате получим строку 123456

// Задача №4. Получить строку в верхнем регистре
let text = 'фрилансер';

console.log(text.toUpperCase());

// Задача №5. Получить подстроку "лан" из:
let text = 'фрилансер';

let search = "лан";
console.log(text.toLowerCase().includes(search.toLowerCase()));

// Задача №6. true или false ?
let text = 'фрилансер';
console.log(text.includes('лан', 4));

false- подстрока "лан" начинается с 3й позиции.
*/