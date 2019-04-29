function check10() {
var max = 10;
alert( (Math.random() * max).toFixed(2) );

var min = 5,
  max = 10;

alert( min + Math.random() * (max - min) );
}
//Math.random - выводит случайное число, а toFixed округляет до 2 знаков после запятой


function check11() {
function ucFirst(str) {
  // только пустая строка в логическом контексте даст false
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("привет") );
}


function check12() {
function checkSpam(str) {
  var lowerStr = str.toLowerCase();

  return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
}


function check13() {
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 3) + '...';
    // итоговая длина равна maxlength
  }

  return str;
}

alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
alert( truncate("Всем привет!", 20) );
}


function check15() {  //Создание объекта
var person={
	width:20,//присвоение свойства со значением
	height:178//присвоение свойства со значением
};
person.hi='Hello';//присвоение свойства со значением
person['name']= " Denis"
var key='name';//Переменая key со значением свойства name, потом ниже обращаемся к переменной
person.age=30;
person['surname']=" Golubovsky";
alert (person.height + person.hi + person[key] + person['surname'] + ' ; ' + person.age);
}


function check16() { 
function isEmpty(schedule) {
  for (var key in schedule) {
    return false;
  }
  return true;
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false
} //функция возвращает true если в объекте shedule нет свойств и false если есть


function check17() { 
"use strict";
var salary=+prompt('Введите зарплату Пети','');
var salary2=+prompt('Введите зарплату Кати','');
var salary3=+prompt('Введите зарплату Саши','');
var salaries = {
  "Вася": salary,
  "Петя": salary2,
  "Даша": salary3
};
var sum = 0;
for (var name in salaries) {
  sum += salaries[name];
}
alert( sum );
}


function check18() { //вывод имени большего свойства по значению в объекте
"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var max = 0;
var maxName = "";
for (var name in salaries) {
  if (max < salaries[name]) {
    max = salaries[name];
    maxName = name;
  }
}

alert( maxName || "нет сотрудников" );
}


function check19() { 
var goods=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,'siska'];
alert (goods.length);
var lastitem=goods[goods.length-1];
alert (lastitem);
}

function check20() { 
var goods=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,'siska'];
goods.push("Комп");
var lastitem=goods[goods.length-1];
alert (lastitem);
}


function check21() { 
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var rand = Math.floor(Math.random() * arr.length);

alert( arr[rand] );
}


function check22() {
var numbers = [];

while (true) {

  var value = prompt("Введите число", 0);

  if (value === "" || value === null || isNaN(value)) break;

  numbers.push(+value);
}

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

alert( sum );
}

function check23() {
function find(array, value) {
  if (array.indexOf) { // если метод существует
    return array.indexOf(value);
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }

  return -1;
}

var arr = ["a", -1, 2, "b"];

var index = find(arr, 2);

alert( index );
}

function check24() {
function filterRange(arr, a, b) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      result.push(arr[i]);
    }
  }

  return result;
}

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
alert( filtered );
}


function check25() {
function addClass(obj, cls) {
  var classes = obj.className ? obj.className.split(' ') : [];

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) return; // класс уже есть
  }

  classes.push(cls); // добавить

  obj.className = classes.join(' '); // и обновить свойство
}

var obj = {
  className: 'open menu'
};

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className) // open menu new me
}


function check26() {
function camelize(str) {
  var arr = str.split('-');

  for (var i = 1; i < arr.length; i++) {
    // преобразовать: первый символ с большой буквы
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join('');
}

alert( camelize("background-color") ); // backgroundColor
alert( camelize("list-style-image") ); // listStyleImage
alert( camelize("-webkit-transition") ); // WebkitTransition
}


function check27() {
function removeClass(obj, cls) {
  var classes = obj.className.split(' ');

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) {
      classes.splice(i, 1); // удалить класс
      i--; // (*)
    }
  }
  obj.className = classes.join(' ');

}

var obj = {
  className: 'open menu menu'
}

removeClass(obj, 'blabla');
removeClass(obj, 'menu')
alert(obj.className) // open
}


function check28() {
function filterRangeInPlace(arr, a, b) {

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (val < a || val > b) {
      arr.splice(i--, 1);
    }
  }

}

var arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);
alert( arr ); // [3, 1]
}


function check29() {
var arr = [5, 2, 1, -10, 8];
function comparenNumeric(a,b){
  if (a>b) return 1;
  if (b<a) return -1;
}
arr.sort(comparenNumeric);
arr.reverse();
alert( arr ); // 8, 5, 2, 1, -10
}


function check30() {
var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted = arr.slice().sort();

alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
}


function check31() {
var arr = [1, 2, 3, 4, 5];

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

arr.sort(compareRandom);

alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
}


function check32() {
function compareAge(personA, personB) {
  return personA.age - personB.age;
}

// проверка
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compareAge);

// вывести
for(var i = 0; i < people.length; i++) {
  alert(people[i].name); // Вовочка Маша Вася
}
}


function check33() {
var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {

  alert( list.value ); // (1)

  if (list.next) {
    printList(list.next); // (2)
  }

}

printList(list);
}


function check34() {
function aclean(arr) {
  // этот объект будем использовать для уникальности
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    // разбить строку на буквы, отсортировать и слить обратно
    var sorted = arr[i].toLowerCase().split('').sort().join(''); // (*)

    obj[sorted] = arr[i]; // сохраняет только одно значение с таким ключом
  }

  var result = [];

  // теперь в obj находится для каждого ключа ровно одно значение
  for (var key in obj) result.push(obj[key]);

  return result;
}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert( aclean(arr) );
}


function check35() {
function unique(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }

  return Object.keys(obj); // или собрать ключи перебором для IE8-
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) ); // кришна, харе, 8-()
}

function check36() {
/*
var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}

alert( arrLength ); // 4,5,2,5
*/
//Вместо масива можно использовать метод reduce
function getSums(arr) {
  var result = [];
  if (!arr.length) return result;

  var totalSum = arr.reduce(function(sum, item) {
    result.push(sum);
    return sum + item;
  });
  result.push(totalSum);

  return result;
}

alert(getSums([1,2,3,4,5])); // 1,3,6,10,15
alert(getSums([-2,-1,0,1])); // -2,-3,-3,-2

var arr = ["Есть", "жизнь", "на", "Марсе"];

var result=arr.map(function(name){
  return name.length;
});

alert( result ); // 4,5,2,5
}