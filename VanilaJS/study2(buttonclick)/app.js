const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input")
const loginButton = loginForm.querySelector("button")


function onClickButton(){
    const value = loginInput.value
    if (value === "")
        console.log("plz input user name")
    else if (value.length >= 15)
        console.log("Your name is TOOOOOOOOOOOO Long!!!")
    else
    {
        console.log(value)
        loginButton.classList.add("displayNone")
        loginInput.disabled = true;
    }
}

loginButton.addEventListener("click",onClickButton)