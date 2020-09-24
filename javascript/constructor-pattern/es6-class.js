class Car {
  constructor(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
  }

  toString() {
    return `${this.model} has done ${this.miles} miles.`;
  }
}

const car = new Car("BMW", 2013, 1000);
console.log(car.toString()); // BMW has done 1000 miles.
