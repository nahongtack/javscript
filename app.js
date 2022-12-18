// const title = document.getElementById("title");
// // title tag의 object내용을 가져옴
// console.dir(title);

// title.innerHTML = "Test title2";
// console.log(title.childNodes);

// const classTest = document.getElementsByClassName("test");

// console.log(classTest);

// classTest[0].innerHTML = "Test Classes";

// querySelector는 CSS의 선택자와 같은 기능을 함
// #id, .class, tag, input[name='name'] 등을 입력할 수 있음
const title = document.querySelector("div.test:first-child h1");
console.dir(title);

function titleClickHandler() {
    const currentColor = title.style.color;
    let newColor;
    if (currentColor !== "blue") {
        newColor = "blue";
    } else {
        newColor = "black";
    }
    title.style.color = newColor;
}

// object.addEventListener
// event를 추가할 수 있음
// argument : event type, event handler
// -> title.onclick = titleClickHandler; 로 변경할 수 있음
// addEventListener를 쓰면 나중에 removeEventListener를 쓸 수 있음
title.addEventListener("click", titleClickHandler);

// console.log(document.body);

// // Description JS practice Prompt, parseInt, typeof
// const age = parseInt(prompt("How old are you?"));

// console.log(typeof age);

// // Process when the age entered as a prompt is not of number type
// if( isNaN(age) ){
//     prompt("This is not a number. Please enter a number.");
// }

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
