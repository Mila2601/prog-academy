console.table(countries);
/* Домашка
1. Отрендерить таблицу стран. в таблицу должны войти поля: name, capital, region, area
2. добавить поисковик (по примеру с занятия), событие на него
3. по событию искать частичные совпадения введенного текста с полями name, capital, region. выдавать полученные результаты в таблицу
4. если нет результатов - показывать соответствующую строку "не найдено" в результатах поиска
*/

function renderCountries(countries) {
    const tableTbody = countries.reduce(function(acc, country) {
        return acc + `<tr><td>${country.name}</td>
                          <td>${country.capital || "Has no capital"}</td>
                          <td>${country.region}</td>
                          <td>${country.area}</td></tr>`
    }, '') || `<tr><td colspan="4" class="text-center">Not found</td></tr>`;    
    document.querySelector('tbody').innerHTML = tableTbody;
}

renderCountries(countries);

let search = document.querySelector('#search');

search.onkeyup = function(event) {
    let value = event.currentTarget.value.toLowerCase().trim();
    let filteredCountries = countries.filter(function(country) {
        return country.name.toLowerCase().includes(value) || 
               country.capital.toLowerCase().includes(value) ||
               country.region.toLowerCase().includes(value);
    });
    renderCountries(filteredCountries);
}