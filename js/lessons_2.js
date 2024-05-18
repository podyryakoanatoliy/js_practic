// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// const styles = ['Jazz', 'Bluz'];
// styles.push('rock-n-roll');
// styles.splice(1, 1, 'classic')
// // console.log(styles);
// styles.shift();
// // console.log(styles.shift([0]));
// styles.unshift('Rap', 'Raggy')
// console.log(styles);

// ЗАДАЧА 2
// використовуючи цикл for , який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax

// const fruits = ['Mango', 'Poly', 'Ajax'];
// for (let fruit of fruits) {
//     console.log(fruits.indexOf(fruit) + 1,fruit)
// }

// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// function findSmallestNumber(numbers) {
//   let smallPoint = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (smallPoint > numbers[i]) {
//       smallPoint = numbers[i];
//     }
//   }
//   return smallPoint;
// }

// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// ЗАДАЧА 4
//  Провірте , чи являється рядок паліндромом
// const str = "ротатор";//true
// const newString = "Hello";//false

// const word = newString.split("").reverse().join("");
// console.log(word === newString);

// ЗАДАЧА 5
// Напишіть ф - цію calculateAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення.
// Всі аргументи будуть тільки числовими

// function calculateAverage(...arrays) {
//     let totalCount = 0;
//     for (const array of arrays) {
//         totalCount += array;
//     }
//     return totalCount / arrays.length;

//     }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36));// 23.2

// ЗАДАЧА 6
// Напишіть ф-цію greet(name) , яка при виклику буде получати імя (як приклад , "Василь"), і логінувати рядок "Привіт, <імя>".У випадку , відсутнього
// відсутнього значення, виводе аргумент "Привіт , гість"
// console.log(greet("Василь"));//Привіт Василь
// console.log(greet());//Привіт гість

// function greet (name = "гість") {
//     return `Привіт ${name}`
// }

// console.log(greet("Василь"));//Привіт Василь
// console.log(greet());//Привіт гість

// ЗАДАЧА 7
// Напишіть ф-цію capitalize , яка буде приймати рядок і буде повертати новий рядок , де кожне слово буде з великої букви
// capitalize('the quick brown fox')// 'The Quick Brown Fox '

// function capitalize(string) {
//   let newString = string.split(" ");
//   let firstPoint = "";
//   let allPoint = "";
//   let array = [];
//   for (const index of newString) {
//     firstPoint = index[0].toUpperCase();
//     allPoint = index.slice(1);
//     newString = `${firstPoint}${allPoint}`;
//     array.push(newString);
//   }

//   return array.join(" ");
// }
// console.log(capitalize("the quick brown fox"));

// ЗАДАЧА 9
// Напишіть функцію для роботи з колекцією навчаючих курсів courses:

// addCourse(name) - добавляє курс у кінець колекції
// removeCourse(name) - видаляє курс із колекції
// // updateCourse(oldName, newName)- змінює імя на нове
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// function addCourse(name) {
// if (courses.includes(name)) {
//     return 'У вас уже є такий курс';
// }
// courses.push(name);
// }

// function removeCourse(name) {
//     if (courses.indexOf(name) === -1) {
//         return 'Курс з таким іменем не найдено';
// }
// courses.splice(courses.indexOf(name), 1);
// }

// function updateCourse(oldName, newName) {
//     const indexName = courses.indexOf(oldName);
//     console.log(indexName);
//     courses.splice(indexName, 1, newName);
// }

// console.log(addCourse("Express")); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// // console.log(addCourse("CSS")); // 'У вас уже є такий курс'
// // console.log(removeCourse("React")); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// // console.log(removeCourse("Vue")); // 'Курс з таким іменем не найдено'
// console.log(updateCourse("React", "NestJS")); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// console.log(courses);

// ЗАДАЧА 1
// Напишіть скрипт,для обєкта user в послідовності:

//  добавляє поле mood із значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення  premium на false
// виводить отримане обєкта user в форматі ключ:значення використовуючи  Object.keys() и for...of

//  const user = {
//    name: "Mango",
//    age: 20,
//    hobby: "html",
//    premium: true,
// };

// ЗАДАЧА 2
// У вас є обєкт , у якому зберігаються зарплати нашої команди.
// Напишіть код , для підрахунку всіх зарплат і збережіть результат в змінні sum
// Повинно получитись 390, якщо обєкт salaries пустий , то результат буде 0
// ЩОБ МОЖНА БУЛО ПЕРЕВИКОРИСТОВУВАТИ ЛОГІКУ, ТОМУ ПИШЕМО ФУНКЦІЮ


//  const salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130,
//  };

// ЗАДАЧА 3
// Створи обєкт calculator(калькулятор) з 3-ма методами:
// read()- запитує 2 значення у юзера і зберігає їх як значення обєкта;
// sum() -повертає суму збережених значень; 
// mult() -перемножує значення збережені і повертає результат;

//  const calculator = {
//  a: null,
//  b: null,

//   read() {},

//   sum() {},

//   mult() {},
// };


// calculator.read();
// console.log(`sum`, calculator.sum());
// console.log(`mult`, calculator.mult());