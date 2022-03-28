
const parent = document.querySelector("div.hello");
const title = document.querySelector("div.hello h1")
console.dir(parent);
console.dir(title);

//developer.mozilla.org/en-US/docs/Web/API/Window

//윈도우 이벤트
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize)

//클립보드 이벤트
function handleWindowCopy(){
    document.body.style.backgroundColor = "red";
    alert("You Copier!")
}
window.addEventListener("copy", handleWindowCopy)

function handleWindowPaste(){
    document.body.style.backgroundColor = "blue";
    alert("pasted somthing")
}
window.addEventListener("paste", handleWindowPaste)

//wifi event
function handleWindowOffLine(){
    alert("No Wifi")
}
window.addEventListener("offline", handleWindowOffLine)

function handleWindowOnLine(){
    alert("Yes Wifi")
}
window.addEventListener("online", handleWindowOnLine)