let num = prompt("Ведите сезон" , '');
let result;

/* Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1',
 то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
*/
switch(num) {
    case "1": {
        result = "Зима";
        break;
    }
    case '2': {
        result = 'Весна';
        break;
    }
    case '3': {
        result = 'лето';
        break;
    }
    case '4': {
        result = 'Осень';
        break;
    }
};

document.write(result);

/* Используя условные конструкции проверьте возвраст пользователя, если пользователю будет 
от 18 до 35 лет переведите его на сайт google.com через 2 секунды, если возвраст пользователя 
будет от 35 до 60 лет переведите его на сайт https://www.uz.gov.ua/, если пользователею будет 
до 18 лет покажите ему первую серию лунтика из ютуба Выполните эту задачу с используя if, switch, 
тернарный оператор
*/

let age = prompt("Укажите свой возраст", '');

if (age >= 18 && age <= 35) {
    document.write('<meta http-equiv="refresh" content="2, url=http://google.com">')
}
