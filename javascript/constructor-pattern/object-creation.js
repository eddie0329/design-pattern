// 3 ways to create empty object in javascript
const newObject1 = {};
const newObject2 = Object.create(Object.prototype);
const newObject3 = new Object();

console.log(newObject1);
console.log(newObject2);
console.log(newObject3);

// 4ways Assign key and value in object
// - Dot syntax
// - Square syntax
// - Object.defineProperty syntax
// - Object.defineProperties syntax

// Dot syntax
newObject1.dot = "dot";
console.log(newObject1); // { dot: 'dot' }

// Square syntax
newObject2["dot"] = "dot";
console.log(newObject2); // { dot: 'dot' }

// Object.defineProperty syntax
Object.defineProperty(newObject3, "definePropertyKey", {
  value: "definePropertyValue",
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(newObject3); // { definePropertyKey: 'definePropertyValue' }

// Object.defineProperties syntax
const newObject4 = {};
Object.defineProperties(newObject4, {
  key: {
    value: "value",
    configurable: true,
    enumerable: true,
    writable: false,
  },
});
console.log(newObject4);
newObject4.key = "hello";
console.log(newObject4);

// Object Extend

const defineProp = (obj, key, value) => {
  const config = {
    value,
    writable: true,
    enumerable: true,
    configurable: true,
  };
  Object.defineProperty(obj, key, config);
};

const person = Object.create(Object.prototype);
defineProp(person, "car", "BMW");
defineProp(person, "name", "Eddie");
defineProp(person, "age", 20);

console.log(person); // { car: 'BMW', name: 'Eddie', age: 20 }

const driver = Object.create(person);
defineProp(driver, "topSpeed", "100mh");
console.log(driver); // { topSpeed: '100mh' }
console.log(driver.car); // BMW

delete person.car;
console.log(person); // { name: 'Eddie', age: 20 }
console.log(driver.car); // undefined
