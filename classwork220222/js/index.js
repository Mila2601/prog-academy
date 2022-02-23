let arr = new Array(15);

for (let i = 0; i < arr.length; i++) {
    arr[i] = i; 
}

document.write(arr.reverse().join(' &#9729; '));

let item = prompt('Введите индекс удаляемого символа', 0);

arr.splice(Number(item), 1);

document.write('</br>' + arr);