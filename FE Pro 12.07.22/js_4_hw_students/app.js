const students = [{name: 'Vasya', mark: 3.8, email: 'vasya@gmail.com', isAdmin: false},
    {name: 'Helen', mark: 3.4, email: 'helen@gmail.com', isAdmin: false},
    {name: 'Marina', mark: 4.0, email: 'marina@gmail.com', isAdmin: true},
    {name: 'Alex', mark: 4.2, email: 'alex@gmail.com', isAdmin: false},
    {name: 'Martin', mark: 4, email: 'martin@gmail.com', isAdmin: true},
    {name: 'Denys', mark: 3.7, email: 'denys@gmail.com', isAdmin: false},
    {name: 'Daniel', mark: 4.8, email: 'daniel@gmail.com', isAdmin: true},
    {name: 'John', mark: 3.6, email: 'jogn@gmail.com', isAdmin: false},
    {name: 'Phil', mark: 4.5, email: 'phil@gmail.com', isAdmin: false},
    {name: 'Anna', mark: 3.8, email: 'anna@gmail.com', isAdmin: false}];

console.log(students);

function logAdmins(students) {
    //вернуть из функции список тех, у кого поле isAdmin: true

    return students.filter(function(student) {
        return student.isAdmin;
    })
}

console.log(logAdmins(students));

function filterByMark(students) {
    //ввести оценку через prompt
    //и вернуть из функции список тех, у кого в поле mark оценка >= чем введенная ранее

    let mark = prompt('Введите оценку');
    return students.filter(function(student) {
        return student.mark >= mark;
    })
}

console.log(filterByMark(students));

function renderStudents(students) {
    //по аналогии с курсами валют

    let str = students.reduce(function(acc, student) {
        acc = acc + `<tr>
            <td>${student.name}</td>
            <td>${student.mark}</td>
            <td>${student.email}</td>
            <td>${student.isAdmin}</td>
        </tr>`;
        return acc
    }, '')   
    document.querySelector('.students tbody').innerHTML = str;
}
renderStudents(students);

function getAverageMark(students) {
    //вернуть среднюю оценку (2 знака после запятой) из списка students

    return (students.reduce(function(acc, student) {
        acc += student.mark;
        return acc
    }, 0)).toFixed(2)
}
console.log(getAverageMark(students));

function getEmailList(students) {
    //вернуть список состоящий из только поля email студентов
    // пример результата: ['vasya@gmail.com', 'helen@gmail.com', ..., 'anna@gmail.com']

    return students.reduce(function(acc, student) {
        acc.push(student.email);
        return acc
    }, [])
}
console.log(getEmailList(students));

function getDataList(students) {
    //вернуть список, состоящий из name и email студентов
    //пример результата: [{name: 'Vasya', email: 'vasya@gmail.com'}, {name: 'Helen', email: 'helen@gmail.com'}, ..., {name: 'Anna', email: 'anna@gmail.com'}]

    return students.reduce(function(acc, student) {
        let studentData = {};
        studentData.name = student.name;
        studentData.email = student.email;
        acc.push(studentData);
        return acc
    }, [])
}
console.log(getDataList(students));