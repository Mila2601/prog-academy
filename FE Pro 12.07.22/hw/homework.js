let countries = [];
let storedCountries = [];

function checkSelect() {
    document.querySelector('.countries-select').onchange = function(e) {
        const value = e.currentTarget.value;
        const filteredCountries = countries.filter(function(country) {
            return country.region === value;
        })
        renderCountries(filteredCountries.length ? filteredCountries : countries);
        storedCountries = filteredCountries;
        document.getElementById('search').value = '';
        clearIcon();
    }
}

function renderSelect(countries) {
    const uniqueRegions = countries.reduce(function(acc, country) {
        if(!acc.includes(country.region)) {
            acc.push(country.region);
        }
        return acc;
    }, []);
    let htmlStr = `<option value="">Select Region</option>`;
    htmlStr += uniqueRegions.map(function(region) {
        return `<option value="${region}">${region}</option>`;
    }).join('');

    let selectElement = document.createElement('select');
    selectElement.className = "countries-select form-control my-3";
    selectElement.innerHTML = htmlStr;
    document.querySelector('#search').before(selectElement);
    checkSelect();
}

function getCountries() {
    fetch('https://restcountries.com/v2/all').then(function (data){
    return data.json();
}).then(function(data) {
    countries = data.map(function(country) {
        return {
            name: country.name,
            capital: country.capital || '',
            area: country.area || 0,
            region: country.region
        }
    });
    const countriesSelect = document.querySelector('.countries-select');
    if(countriesSelect?.innerHTML) {
        countriesSelect.remove();
    }
    renderCountries(countries);
    renderSelect(countries);
    })
}

function renderCountries(countries) {           
    const htmlStr = countries.reduce(function(acc, country, index) {
        return acc + `<tr>
                    <td>${index + 1}</td>
                    <td>${country.name}</td>
                    <td>${country.capital || '---'}</td>
                    <td>${country.region}</td>
                    <td>${country.area}</td>
                </tr>`;
    }, '');
    document.querySelector('.table tbody').innerHTML = htmlStr;
    setListeners();
}

function setListeners() {
    document.getElementById('search').onkeyup = function(e) {
        clearIcon();
        let searchValue = e.currentTarget.value.toLowerCase().trim();
        const filteredCountries = (storedCountries.length ? storedCountries : countries)
            .filter(function(country) {
            const name = country.name.toLowerCase();
            const capital = country.capital.toLowerCase();
            const region = country.region.toLowerCase();
            return name.includes(searchValue)
                || capital.includes(searchValue)
                || region.includes(searchValue);
        })
        renderCountries(filteredCountries);
    }
    let tbody = document.querySelector('.table tbody');
    tbody.onclick = function(e) { 
        for(let item of document.querySelectorAll('table tbody tr')) {
            item.classList.remove('bg-warning');
        }        
        e.target.closest('tr').classList.add('bg-warning');
    }
    setIcon();    
}

function clearIcon() {
    for (let i of document.querySelectorAll('th i')) {
        i.className = '';
    }
}

function setIcon() {
    for (let item of document.querySelectorAll('[data-attr]')) {
        item.onclick = function(e) {
            clearIcon();
            let key = e.currentTarget.getAttribute('data-attr');
            let isSorted = e.currentTarget.getAttribute('data-sort');
            e.currentTarget.querySelector('th i').classList.add('fa');           
            
            if (isSorted) {
                e.currentTarget.querySelector('th i').classList.add('fa-sort-amount-asc');
                e.currentTarget.querySelector('th i').classList.remove('fa-sort-amount-desc');
                e.currentTarget.removeAttribute('data-sort');
            } else {
                e.currentTarget.querySelector('th i').classList.add('fa-sort-amount-desc');
                e.currentTarget.querySelector('th i').classList.remove('fa-sort-amount-asc');
                e.currentTarget.setAttribute('data-sort', '+');
            };
            sortCountries(key, isSorted);
        };
    };
}

function sortCountries(key, isSorted) {
    let rendered = (storedCountries.length ? storedCountries : countries).sort(function (a, b) {
        if (isSorted) {
            return (a[key] > b[key]) ? 1 : -1
        } else {
            return (a[key] > b[key]) ? -1 : 1
        }
    });
    renderCountries(rendered);
}

getCountries();