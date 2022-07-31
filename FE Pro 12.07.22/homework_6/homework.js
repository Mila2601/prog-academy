let rates;
const inputDate = document.getElementById('date');
const now = new Date();

function currentDate (date) {
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();    
    const dateValue = `${year}${(month.toString().length > 1) ? (month + 1) : `0${month + 1}`}${(day.toString().length > 1) ? day : `0${day}`}`;
    return dateValue;
}
let dateNow = currentDate(now);
inputDate.value = `${dateNow.slice(0, 4)}-${dateNow.slice(4, 6)}-${dateNow.slice(6)}`;

function renderRates (rates) {
    const htmlStr = rates.reduce(function(acc, rate, index) {
        return acc + `<tr>
                    <td>${index + 1}</td>
                    <td>${rate.name}</td>
                    <td>${rate.rate}</td>
                    <td>${rate.cc}</td>
                </tr>`;
    }, '');
    document.querySelector('.table tbody').innerHTML = htmlStr;
}

const search = document.querySelector('#search');

fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${dateNow}&json`).then(function (data){
    return data.json();
}).then(function (data) {
    rates = data.map(function (rate) {
        return {
            name: rate.txt,
            rate: rate.rate.toFixed(2),
            cc: rate.cc,
        };
    });
    renderRates(rates);
});

search.onkeyup = function(event) {
    const value = event.currentTarget.value.toLowerCase().trim();
    const names = rates.filter(function(rate) {
        return rate.name.toLowerCase().includes(value);
    });
    renderRates(names);
}

inputDate.onchange = function(event) {
    const userDate = event.currentTarget.value.replace(/-/g, '');
    fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${userDate}&json`).then(function (data){
    return data.json();
}).then(function (data) {
    rates = data.map(function(rate) {
        return {
            name: rate.txt,
            rate: rate.rate.toFixed(2),
            cc: rate.cc,
        };
    });
    renderRates(rates);
    search.value = '';
});
}

