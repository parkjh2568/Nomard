const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input")

//이번엔 html에 form과 submit버튼으로 구성
//submit은 submit버튼을 누르거나 enter칠때 작동
//폼을 그냥 서밋해버리면 페이지를 새로고침해버림
//그걸 막을꺼임 아래코드로
//서밋이(통과) 되었다는 결과값만을 받아옴


function onClickButton(event){
    event.preventDefault()
    const value = loginInput.value
    console.log(value);
}

//이벤트는 form의 submit을 감지
loginForm.addEventListener("submit", onClickButton)


// function getArgue(muyaho){
//     muyaho.preventDefault(); //어떤이벤트이든 기본행동을 막는함수(서밋에는 그중에 새로고침작업이 포함됨)
//     console.log(muyaho);
// }
// loginForm.addEventListener("submit", getArgue)
// 위와같은 상황에서 이벤트리스너는 실행시킬 함수에게 특정한 데이터들을 뿌려줌
// 첫번째 변수에는 방금 일어난 event에대한 정보를 뿌려줌