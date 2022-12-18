// Description JS practice Prompt, parseInt, typeof
const age = parseInt(prompt("How old are you?"));

console.log(typeof age);

// Process when the age entered as a prompt is not of number type
if( isNaN(age) ){
    prompt("This is not a number. Please enter a number.");
}

// // create calculator object
// const calculator = {
//     add : function (a, b) { // 더하기
//         return a + b;
//     },
//     minus : function (a, b) { // 빼기
//         return a - b;
//     },
//     multiply : function (a, b) { // 곱하기
//         return a * b;
//     },
//     divide : function (a, b) { // 나누기
//         return a / b;
//     },
//     square : function (a, b){ // 제곱
//         return a**b;
//     }
// }

// const firstNumber = 2;
// const secondNumber = 5;

// calculator.add(firstNumber, secondNumber);
// calculator.minus(firstNumber, secondNumber);
// calculator.multiply(firstNumber, secondNumber);
// calculator.divide(firstNumber, secondNumber);
// calculator.square(firstNumber, secondNumber);
