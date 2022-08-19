class Auto {
    constructor(name, model, year, vin){
        this.name = name;
        this.model = model;
        this.year = year;
        this._vin = vin;
    }  
    set _vin(newVin = '') {
        if(newVin.length !== 16) {return false;}
        return this._vin = newVin;
    }
    get vin() {
        return this._vin;
    }
}
 
let tesla = new Auto ('Tesla', 'Model X', 2022, '1234567890123456');

console.log(tesla); // 'Tesla', 'Model X', 2022, '1234567890123456';

tesla.vin = "456";

console.log(tesla); // 'Tesla', 'Model X', 2022, '1234567890123456'; change nothing

tesla.vin = "asdfghjklqwerty";

console.log(tesla); // 'Tesla', 'Model X', 2022, 'asdfghjklqwerty'; vin changed
