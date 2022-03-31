const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input")
const link = document.querySelector("a")

function onClickButton(event){
    event.preventDefault()
    const value = loginInput.value
    console.log(value);
}

function handleLinkClick(event){
    event.preventDefault()
    console.log(event)
}

loginForm.addEventListener("submit", onClickButton)
link.addEventListener("click", handleLinkClick)
