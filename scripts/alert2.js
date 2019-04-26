// 1) Пример с использование if оператора
function check() {
  if (prompt('Введите пароль', '*****') == '12345'){
    return alert('Пароль верный');
} else {
    return alert('Пароль не верный!');
}
}
// 2) Оператор ? применение и использование. Оператор && и || применение и использование
function check2() {
  var age = prompt('Введите ваш возраст:', '');
  var message = (age >= 1 && age < 8) ? 'Здравствуй, малыш!' :
      (age == 0 || age == null ) ? 'Вы не ввели возраст!' :
      (age < 0 ) ? 'Наверное вы ещё не родились!' :
      (age <= 18) ? 'Привет!' :
      (age <= 100) ? 'Здравствуйте!' :
      'Какой необычный возраст!';
    alert( message );
}
// 3) Конструкция if... else if... else... применение и использование
function check3() {
  var who = prompt ('Введите Name', '');
  var pass;

if (who == null) {
  alert ('Вход отменён');
} else if (who == 'Админ') {
    pass = prompt('Введите пароль', '');
  if (pass==null) {
    alert ('Вход отменён');
  } else if (pass == '11111') {
    alert ('Добро пожаловать ' + who);
  } else {
    alert ('Пароль неверный');
  }   
} else {
    alert ('Я вас не знаю');
} 
}

//Использование оператора ! 
function check4() {
 var age = prompt ('Введите значение', '');

if ( ! (age >= 14 && age <= 90) ) {
  alert ('Правильно!');
} else {
  alert ('Неправильно!');
}
}

// Прерывание цикла break и выполнение цикла while


function check5() {
alert ("Введите числа и нажмите ок, как только ввод прекратиться выведет сумму всех чисел")
  var sum = 0;

while (true) {
  var value = +prompt("Введите число", '');
if ( !value ) break; 
  sum += value;
}
alert( 'Сумма: ' + sum );
}
