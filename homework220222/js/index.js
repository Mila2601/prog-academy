/*
Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
*/

let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

styles.splice(Math.round(styles.length/2 - 1), 1, 'Классика');

let firstElement = styles.shift();

document.write(firstElement);

styles.unshift('Регги');
styles.unshift('Рэп');

// можно последние две строки заменить на styles.splice(0, 0, "Рэп", "Регги")