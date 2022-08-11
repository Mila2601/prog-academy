let countries = [];
let storedCountries = [];

function checkSelect() {
    document.querySelector('.countries-select').onchange = e => {
        const value = e.currentTarget.value;
        const filteredCountries = countries.filter(country => country.region === value);
        renderCountries(filteredCountries.length ? filteredCountries : countries);
        storedCountries = filteredCountries;
        document.getElementById('search').value = '';
        clearIcon();
    }
}

function renderSelect(countries) {
    const uniqueRegions = countries.reduce((acc, country) => {
        if(!acc.includes(country.region)) {
            acc.push(country.region);
        }
        return acc;
    }, []);
    let htmlStr = `<option value="">Select Region</option>`;
    htmlStr += uniqueRegions.map(region => (`<option value="${region}">${region}</option>`)).join('');
    let selectElement = document.querySelector('select');
    selectElement.innerHTML = htmlStr;
    checkSelect();
}

function getCountries() {
    fetch('https://restcountries.com/v2/all').then(data => data.json()).then((data = []) => {
    countries = data.map(country => ({
            name: country.name,
            capital: country.capital || '',
            area: country.area || 0,
            region: country.region,
            currency: (() => { return (country.currencies) ? country.currencies[0].code : '---' })()
        }))

    const countriesSelect = document.querySelector('.countries-select');
    if(countriesSelect?.innerHTML) {
        countriesSelect.remove();
    }
    renderCountries(countries);
    renderSelect(countries);
    })
}

function renderCountries(countries) {           
    const htmlStr = countries.reduce((acc, country, index) => acc + `<tr>
                    <td>${index + 1}</td>
                    <td>${country.name}</td>
                    <td>${country.capital || '---'}</td>
                    <td>${country.region}</td>
                    <td>${country.area}</td>
                    <td>${country.currency}</td>
                </tr>`, '');
    document.querySelector('.table tbody').innerHTML = htmlStr;
    setListeners();
}

function setListeners() {
    document.getElementById('search').onkeyup = e => {
        clearIcon();
        let searchValue = e.currentTarget.value.toLowerCase().trim();
        const filteredCountries = (storedCountries.length ? storedCountries : countries)
            .filter(country => {
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
    tbody.onclick = e => { 
        for(let item of document.querySelectorAll('table tbody tr')) {
            item.classList.remove('bg-warning');
        }        
        e.target.closest('tr').classList.add('bg-warning');
    }
    setIcon();    
}

function clearIcon() {
    for (let i of document.querySelectorAll('.fa')) {
        i.classList.add('d-none');
    }
}

function setIcon() {
    for (let item of document.querySelectorAll('[data-attr]')) {
        item.onclick = e => {
            clearIcon();
            let key = e.currentTarget.getAttribute('data-attr');
            let isSorted = e.currentTarget.getAttribute('data-sort');
            
            if (isSorted) {
                e.currentTarget.querySelector('.fa-sort-amount-asc').classList.remove('d-none');               
                e.currentTarget.removeAttribute('data-sort');
            } else {
                e.currentTarget.querySelector('.fa-sort-amount-desc').classList.remove('d-none');
                e.currentTarget.setAttribute('data-sort', '+');
            };
            sortCountries(key, isSorted);
        };
    };
}

function sortCountries(key, isSorted) {
    let rendered = (storedCountries.length ? storedCountries : countries).sort((a, b) => {
        if (isSorted) {
            return (a[key] > b[key]) ? 1 : -1
        } else {
            return (a[key] > b[key]) ? -1 : 1
        }
    });
    renderCountries(rendered);
}

getCountries();