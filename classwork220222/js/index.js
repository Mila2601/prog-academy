let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

document.write(arr.reverse().join(' &#9729; '));

let item = prompt('Введите индекс удаляемого символа', 0);

arr.splice(Number(item), 1);

document.write('</br>' + arr);