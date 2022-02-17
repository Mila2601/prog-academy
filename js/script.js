document.write('<header></header>');
document.write('<nav></nav>');
document.write('<section></section>');
document.write('<footer></footer>');

let firstName = prompt("Введите Ваше имя", "Филипп");
let lastName = prompt("Введите свою фамилию");
let age = prompt("Укажите свой возраст", "25");
let firstNumber = prompt('Сейчас мы будем получать среднее арифметическое. Введите первое число:');
let secondNumber = prompt('Введите второе число');
let thirdNumber = prompt('Введите третье число');
let average = (parseInt(firstNumber) + parseInt(secondNumber) + parseInt(thirdNumber)) / 3;
alert(`Ваше среднее арифметическое: ${average}`);


let x,
    y,
    z;

let expressions = ['x += y - x++ * z', 
                   'z = --x - y * 5', 
                   'y /= x + 5 % z', 
                   'z - x++ + y * 5', 
                   'x = y - x++ * z'];

function initVar () {
    x = 6;
    y = 14;
    z = 4;
}

initVar();

let section = document.querySelector("section");

let createPar = function (string, expression, isExpression) {
    let p = document.createElement('p');
    let separator = isExpression ? ' = ' : ': ';
    p.textContent = `${string}` + separator + expression;
    section.appendChild(p);
}

createPar('Имя', firstName, false);
createPar('Фамилия', lastName, false);
createPar('Возраст', age, false);
createPar('Работа с выражениями', '', false)

for (let i = 0; i < expressions.length; i++) {
    createPar(expressions[i], eval(expressions[i]), true);
    initVar();
}

/*  Первое выражение ('x += y - x++ * z'):
    Изначально х = 6, по приоритету сначала выполнится умножение, т.е. выражение будет таким:
    х = 6 + 14 - (6*4) = -4. Здесь используется постфиксный инкремент, 
    поэтому х++ будет все еще равен 6 

    Второе выражение ('z = --x - y * 5'):
    z = (префиксный декремент) 5 - 14*5 = -65. z присваивается новое значени -65 

    Третье выражение ('y /= x + 5 % z'):
    у = 14 / (6 + 5(остаток от деления = 1)%4) = 2. У присваивается новое значение 2

    Четвертое выражение ('z - x++ + y * 5'):
    4 - 6 + (14*5) = 68

    Пятое выражение ('x = y - x++ * z'):
    х присваивается 14 - (6*4) = -10
*/