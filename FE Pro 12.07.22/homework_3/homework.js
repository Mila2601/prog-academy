console.table(countries);

function getNames(countries) {
    /*
        дописать функцию, чтоб getNames возвращало список имен стран
        (массив countryNames, каждый элемент этого массива - название страны (поле name у каждого объекта))
    */
   let countryNames = [];
   for (country of countries) {
       countryNames.push(country.name);
   }
    return countryNames;
}
var names = getNames(countries);
console.log(names);
//пример: после getNames(countries) в names будет храниться ['Afganistan', 'Angola', ...]


function getCapitals(countries) {
    /*
        дописать функцию, чтоб getCapitals возвращало список столиц от каждой страны
        (массив countryCapitals, каждый элемент этого массива - название столицы страны (поле capital у каждого объекта страны))
    */
    let countryCapitals = [];
    for (country of countries) {
        countryCapitals.push(country.capital);
    }
    return countryCapitals;
}
var capitals = getCapitals(countries);
//пример: после getCapitals(countries) в capitals будет храниться ['Kyiv', 'London', ...]
console.log(capitals);

function getAverageArea(countries) {
    /*
        дописать функцию, чтоб getAverageArea возвращало среднюю площадь из массива countries.
        получается, нужно посчитать среднее арифметическое. название поля - area
        результат с точностью до 1 знака после запятой
    */
   let totalArea = 0;
   for (country of countries) {
    totalArea += country.area;
   }
   let averageArea = (totalArea / countries.length).toFixed(1);
   return averageArea;
}
var average = getAverageArea(countries)
//пример: в average -> 601162.3
console.log(`Average area is ${average}`);

function getUniqueRegions(countries) {
    /*
        Возвращает список уникальных названий регионов (поле region)

    */
   let uniqueRegions = [];
   for (country of countries) {
       if (!uniqueRegions.includes(country.region)) {
        uniqueRegions.push(country.region);
       }
   }
   return uniqueRegions;
}
var unique = getUniqueRegions(countries);
//пример: unique -> ["Asia", "Europe", "Africa", "Oceania", "Americas", "Polar", "Antarctic Ocean", "Antarctic"]
console.log(unique);