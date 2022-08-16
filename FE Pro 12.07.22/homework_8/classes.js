class Auto {
    constructor (mark, model, year, vin) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.vin = vin;
    }

    log () {
        return (`mark: ${this.mark};
                model: ${this.model};
                year: ${this.year}`)
    }

    checkVin () {
        return (this.vin).length == 16 ? true : false
    }
}

class Auto_Fuel extends Auto {
    constructor (mark, model, year, vin, displacement, consumption) {
        super(mark, model, year, vin);
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.displacement = displacement;
        this.consumption = consumption
    }

    showFuelConsumption () {
        return `Displacement is ${this.displacement} and consumption is ${this.consumption}`
    }
}

class Auto_Electric extends Auto {
    constructor (mark, model, year, vin, batteryCapacity) {
        super(mark, model, year, vin);
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.batteryCapacity = batteryCapacity
    }

    showBatteryConfig () {
        return `Battery capacity is ${this.batteryCapacity}`
    }
}

let tesla = new Auto_Electric('Tesla', 'Model X', 2020, 'AF12124AEGJ32413', '100 кВт/ч')