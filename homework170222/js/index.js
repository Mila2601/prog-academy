/* Перепишите if c использованием оператора "?":
    if (a + b < 4) {
        result = 'Мало';
    } else {
        result = 'Много';
    } */

    let a,
        b,
        result;

(a + b < 4) ? result = 'Мало' : result = 'Много';

/* Перепишите if..else с использованием нескольких операторов "?"
    var message;
    if (login == 'Вася') {
        message = 'Привет!';
    } else if (login == 'Директор') {
        message = 'Здравствуйте';
    } else if (login = '') {
        message = 'Нет логина';
    } else {
        message = '';
    } */

let login = prompt('Введите логин', 'Вася');

let message = (login == 'Вася') ? 'Привет!' : 
              (login == 'Директор') ? 'Здравствуйте' : 
              (login = '') ? 'Нет логина' : 
              '';

alert(message);

/* Дано два числа А и В где (А < В). Выведите на экран сумму всех чисел, расположенных в числовом 
промежутке от А до В. Выведите на экран все нечетные значения, расположенные в числовом 
промежутке от А до В. */

let A = 10,
    B = 25,
    num = A,
    sum = 0;

while (num <= B) {
    sum += num;
    num++;
}

document.write(`${sum} </br>`);

num = A;

while (num <= B) {
    if ((num % 2) !== 0) {
        document.write(`${num} </br>`);
    }
    num++;
}

/* Используя циклы нарисуйте в браузере с помощью пробелов (&nbsp;) и звездочек (&#9733;)
    * прямоугольник
    * прямоугольный треугольник
    * равносторонний треугольник
    * ромб */

let firstNum,
    secondNum;

function initNum () {
    firstNum = 12,
    secondNum = 20;
}

    // прямоугольник

initNum();

for (let i = 0; i < firstNum; i++) {
    for (let j = 0; j < secondNum; j++) {
        document.write('&#9733;');
    }

       document.write('</br>');
}

document.write('</br>');

   // прямоугольный треугольник

for (let i = 0; i < firstNum; i++) {
    for (let j = 0 + i; j < secondNum; j++) {
        if (j >= firstNum) break;
         document.write('&#9733;');
    }

    document.write('</br>');
}

document.write('</br>');

    // Равносторонний треугольник

for (let i = 0; i < firstNum; i++) {
    for (let j = 0; j < secondNum; j++) {
        if ((i <= j) || ((i > firstNum / 2) && (j >= (firstNum - i)))) {
            document.write('&nbsp;');
        } else {
            document.write('&#9733;');         
        }
    }
        document.write('</br>');
}

document.write('</br>');

    // Ромб

if (secondNum >= firstNum) {
    secondNum = firstNum;
} else {
    firstNum = secondNum;
}

let wMiddle = Math.round(secondNum/2) - 1,
    hMiddle = Math.round(firstNum/2) - 1;

function delta(i, middle) {
    if (i <= middle) {return i}
    else {return 2*middle - i;}
}

for (let i = 0; i < firstNum - 1; i++) {
    for (let j = 0; j < secondNum; j++) {
        if (j >= (wMiddle - delta(i, hMiddle)) && j <= (wMiddle + delta(i, hMiddle))) {
            document.write('O');         
        } else {
            document.write('-');
        }
    }
    document.write('</br>');
}  

document.write('</br>');

    // Полый ромб

for (let i = 0; i < firstNum - 1; i++) {
    for (let j = 0; j < secondNum; j++) {
        if (j == (wMiddle - delta(i, wMiddle)) || j == (wMiddle + delta(i, wMiddle))) {
            document.write('&#9733;');
        } else {
            document.write('-');         
        }
    }
        document.write('</br>');
}

document.write('</br>');

    // Полый прямоугольник

initNum();

for (let i = 0; i < firstNum; i++) {
    for (let j = 0; j < secondNum; j++) {
        if (i == 0 || i == (firstNum - 1) || j == 0 || j == (secondNum - 1)) {
        document.write('O');
        } else {
            document.write('<span>&nbsp;</span>');
        }
    }
    
        document.write('</br>');
}