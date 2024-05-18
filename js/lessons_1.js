// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// const name = "ГАЛИНА";
// const age = 35;
// const lang = "JAVASCRIPT"

// console.log(`ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age}  РОКІВ, Я ВИВЧАЮ ${lang}`);

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const name = prompt('Введіть своє імя')
// const email = prompt('Введіть свою пошту')
// const number = prompt('Введіть свій номер')
// console.log(`КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ ${email} І ${number} `)
// console.log(`КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ ${email} І ${number} `)
// ЗАДАЧА 3
// ПОТРІБНО ЗАПИТАТИ У МАГАЗИНІ ЦІНУ ЗА КОЖЕН ОКРЕМИЙ ТОВАР,ТА ВИВЕСТИ ПОВІДОМЛЕННЯМ   ЗАГАЛЬНУ ЦІНУ ТОВАРУ

// const tovar1 = Number(prompt('Введіть ціну 1'))
// const tovar2 = +prompt('Введіть ціну 2')
// const tovar3 = +prompt('Введіть ціну 3')
// const vsiTovary = tovar1 + tovar2 + tovar3
// console.log(vsiTovary)

// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const month = Number(prompt("скільки місяців має рік"));
// const allMonth = 12;
// if (allMonth === month) {
//   console.log("вірно");
// } else {
//   console.log("не вірно");
// }

// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ВИЗНАЧАТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО , ЧИ НЕ ПАРНЕ.

// const newNumber = Number(prompt("ВведіПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯть число"));
// console.log(`остача- ${newNumber % 2}`);
// newNumber % 2 === 0
// ? console.log(`ви ввели число ${newNumber}, воно парне`)
// : console.log(`ви ввели число ${newNumber}, воно непарне`);

// ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const month = Number(prompt("Введи номер місяця, в який ти народився"))
// if (month === 12 || month === 1 || month === 2) {
// console.log ("ти народився взимку")
// }

// else if (month >= 3 && month <= 5) {
//   console.log ("ти народився весною")
// }

// else if (month >= 6 && month <= 8) {
//   console.log ("ти народився влітку")
// }

// else if (month >= 9 && month <= 11) {
//   console.log ("ти народився восени")
// }

// else {
//   console.log("ти ввів невірний номер")
// }

// ЗАДАЧА 8
// НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99

// const subscribe = prompt("Input your type subscribe: ").toLowerCase();
// switch (subscribe) {
//     case "day" :
//         console.log("Price: 1.99")
//         break;
//     case "week" :
//         console.log("Price: 5.99")
//         break;
//     case "month" :
//         console.log("Price: 10.99")
//         break;
//     case "year" :
//         console.log("Price: 100.99")
//         break;
//     default:
//         console.log("choise your sub");
// }

// ЗАДАЧА 9
// НАПИШІТЬ ЦИКЛ FOR ЯКА БУДЕ ВИВОДИТИ У КОНСОЛЬ ЧИСЛА ЗА ЗРОСТАННЯМ ВІД MIN ДО MAX, ПІСЛЯ ТОГО ЧИСЛА КРАТНІ 10

// const mindata = 1;
// const maxdata = 100;
// for (let i = mindata; i <= maxdata; i++) {
//   console.log(i);
// }

// for (i = mindata; i<= maxdata; i++) {
//   if (i%10 === 0) {
//     console.log(i)
//   }
// }

// ЗАДАЧА 10
// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ , ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!" , ЯКЩО МЕНШЕ 7
// "Your name isn't very long"

// const newName = prompt("Введіть ім'я");
// newName.length >= 7
//   ? console.log("Wow, you  have a REALLY long name!")
//   : console.log("Your name isn't very long");
// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ , ЩО НЕ ВІРНИЙ ЛОГІН
// const correctLogin = "qwerTY123";
// const correctPassword = "qwerTY1234";
// const inputLogin = prompt("Input your login: ");
// const inputPassword = prompt("Input your password: ");

// if (inputLogin === correctLogin && inputPassword===correctPassword) {
//     console.log("Thank you, your are welcome");
// } else {
//     console.log("Go away");
// }

