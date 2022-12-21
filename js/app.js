const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const contentDiv = document.querySelector(".content");

const HIDDEN_CLASS_NAME = "hidden"; // class 이름을 변수로 저장
const USER_NM_KEY = "userNm"; // localStorage key를 변수로 저장

// loginForm submit event
onLoginSubmit = function (event) {
    event.preventDefault(); // submit event의 기본 동작을 막음 -> 브라우저가 새로고침되는 것을 막음

    loginForm.classList.add(HIDDEN_CLASS_NAME); // loginForm을 숨김

    const userNm = loginInput.value; // loginInput의 value를 userNm에 저장
    //contentDiv.innerText = "Hello! " + userNm.value;
    localStorage.setItem(USER_NM_KEY, userNm); // localStorage에 userNm을 저장

    drawingContent(userNm); // contentDiv를 그려내고, use name을 삽입함
};

// contentDiv를 그려내고, use name을 삽입함
function drawingContent(userNm) {
    contentDiv.innerText = `Hello! ${userNm}`; // 백틱 + ${} 사용으로 변수값을 문자열에 삽입
    contentDiv.classList.remove(HIDDEN_CLASS_NAME); // contentDiv를 보여줌
}

const saveUserNm = localStorage.getItem(USER_NM_KEY); // localStorage에서 userNm을 가져옴

// localStorage에 userNm이 있으면 loginForm을 숨기고 contentDiv를 보여줌
if (saveUserNm === null) {
    loginForm.classList.remove(HIDDEN_CLASS_NAME); // loginForm을 보여줌
    loginForm.addEventListener("submit", onLoginSubmit); // loginForm submit event listener
} else {
    drawingContent(saveUserNm); // contentDiv를 그려내고, use name을 삽입함
}