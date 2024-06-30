// Задание 1
function cube(number) {
    return number**3;
}
console.log(cube(2) + cube(3));

// Задание 2
function calculateTax(number) {
  if (isNaN(number)) {
    console.log("Значение задано неверно");
    return;
  }
    const tax = number * 0.13;
    console.log(`Размер заработной платы за вычетом налогов равен ${number - tax}`);
}
const inputNumber = parseFloat(prompt("Введите число: "));
calculateTax(inputNumber);

// Задание 3
function findMax(num1, num2, num3) {
    let max = Math.max(num1, num2, num3);
    return max;
}
const num1 = parseFloat(prompt("Введите первое число:"));
const num2 = parseFloat(prompt("Введите второе число:"));
const num3 = parseFloat(prompt("Введите третье число:"));
console.log(`Максимальное значение: ${findMax(num1, num2, num3)}`);

// Задание 4
function sum(num1, num2) {
  return num1 + num2;
}

function difference(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  } else if (num2 > num1) {
    return num2 - num1;
  } else {
    return 0;
  }
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

console.log(sum(2, 6)); // Вывод: 8
console.log(difference(10, 5)); // Вывод: 5
console.log(multiply(3, 4)); // Вывод: 12
console.log(divide(10, 2)); // Вывод: 5