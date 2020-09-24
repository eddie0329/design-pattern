function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

Car.prototype.toString = function () {
  return `${this.model} has done ${this.miles} miles`;
};

const car = new Car("BMW", 2013, 10000);
console.log(car.toString()); // BMW has done 10000 miles
