let Auto = function (mark, model, year, vin) {
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.vin = vin;
}

Auto.prototype.log = function () {
    return (`mark: ${this.mark};
            model: ${this.model};
            year: ${this.year}`)
}

Auto.prototype.checkVin = function () {
    return (this.vin).length == 16 ? true : false
}

let Auto_Fuel = function (mark, model, year, vin, displacement, consumption) {
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.vin = vin;
    this.displacement = displacement;
    this.consumption = consumption
}

Auto_Fuel.prototype = Object.create(Auto.prototype);

Auto_Fuel.prototype.showFuelConsumption = function () {
    return `Displacement is ${this.displacement} and consumption is ${this.consumption}`
}

let Auto_Electric = function (mark, model, year, vin, batteryCapacity) {
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.vin = vin;
    this.batteryCapacity = batteryCapacity
}

Auto_Electric.prototype = Object.create(Auto.prototype);

Auto_Electric.prototype.showBatteryConfig = function () {
    return `Battery capacity is ${this.batteryCapacity}`
}

let tesla = new Auto_Electric('Tesla', 'Model X', 2020, 'AF12124AEGJ32413', '100 кВт/ч')