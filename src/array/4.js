// removing an element from the first position
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.reIndex = function (myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) newArray.push(myArray[i]);
  }
  return newArray;
};

Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
};

numbers = numbers.removeFirstPosition();

// using the shift method

numbers.shift();
console.log("🚀 ~ numbers:", numbers);
