class Thermostat {
    constructor(tempFahr) {
      this._temp = 5/9 * (tempFahr - 32);
    }
    // getter
    get temperature() {
      return this._temp;
    }
    //setter
    set temperature(updateTemp) {
      this._temp = updateTemp;
    }
}
  
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius