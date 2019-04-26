function check7() {
function showMessage(from, text) { // параметры from, text

  from = "*** " + from + " ***"; // здесь может быть сложный код оформления
  text = "<<" + text + " >>!!!!!";
  alert(from + '- ' + text);
}

showMessage('Вы вошли как', user);//***Вы вошли как***-user(то что введено при входе)


function showMes(fr, te) {
  if (te === undefined) { //параметр te проверяется === undefined
    te = 'Добро пожаловать!';// выдает текст - Добро пожаловать
  }
  alert( fr + ": " + te );
}

showMes(user); 
}


function check8() {
function pow (x,n) {
  var x = prompt('Введите x', ''), // для объявления переменных можно использовать var а ниже через запятую объявлять имя переменных
      n = prompt('Введите n', '');

if (n <= 1 || n >= 100) {
  alert ("Введите другую степень больше 1 и меньше 100");
return pow();
} else if ( !(n % 1 == 0) ) {
  alert ('Введите целое число для степени');
return pow();
}

var result = x;

for (var i = 1; i < n; i++) {
  result*= x;
}
return alert( result );
}

pow();
}

/* Function Declaration можно вызвать до объявления кода функции.
sayHi("Вася"); // Привет, Вася
function sayHi(name) {
  alert( "Привет, " + name );
} 
*/

/*Но Function Expression будет читаться в use strict внутри блока условий, в отличии от Declaration
var age = prompt('Сколько вам лет?');
var sayHi;
if (age >= 18) {
  sayHi = function() {
    alert( 'Прошу Вас!' );
  }
} else {
  sayHi = function() {
    alert( 'До 18 нельзя' );
  }
}
sayHi();
*/
//Функциональное выражение, которое не записывается в переменную, называют анонимной функцией.
function check9() {
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
function showOk() {
  alert( "Вы согласились." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

ask("Вы согласны?", showOk, showCancel);


var sum = +prompt('Введите число для подсчета автосуммы всех предшествующих чисел',);
function sumTo(n) {
  var res = sum;
  for (var i = 1;i < sum;i++){
   res = res + i; 
  } return res;
}
alert( sumTo() );
}
/* Та же функция но через рекурсию.
function sumTo(n) {
  if (n>1){
    n=n+sumTo(n-1);
  } else if (n<0) {
    n=n+sumTo(n+1);
  }return n;
}

alert(sumTo(100)) ;
*/