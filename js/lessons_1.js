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

const month = Number(prompt("скільки місяців має рік"));
const allMonth = 12;
if (allMonth === month) {
  console.log("вірно");
} else {
  console.log("не вірно");
}
