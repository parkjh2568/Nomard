
const h1 = document.querySelector("div.hello h1")
console.dir(h1);
const h2 = document.querySelector("div.hello h2")
console.dir(h2);
const h3 = document.querySelector("div.hello h3")
console.dir(h3);
const h4 = document.querySelector("div.hello h4")
console.dir(h4);

//인라인코드로 강제로 바꾸기
function handleMouseClick() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue")
        newColor = "tomato"
    else
        newColor = "blue"
    h1.style.color = newColor
}
h1.addEventListener("click", handleMouseClick)



//css이용하기 -> 클래스 이름 덮어쓰기
function handleMouseClick2() {
    const className = "active"
    if (h2.className === className)
        h2.className = ""
    else
        h2.className = className
}
h2.addEventListener("click", handleMouseClick2)



//css이용하기 -> classList 이용하기

function handleMouseClick3() {
    const className = "listactive"
    if (h3.classList.contains(className))
        h3.classList.remove(className)
    else
        h3.classList.add(className)
}
h3.addEventListener("click", handleMouseClick3)


//css이용하기 -> classList.toggle 이용하기

function handleMouseClick4() {
    const className = "toggleactive"
    h4.classList.toggle(className)
}
h4.addEventListener("click", handleMouseClick4)