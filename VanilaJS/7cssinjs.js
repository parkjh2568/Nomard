
const h1 = document.querySelector("div.hello h1")
console.dir(h1);
const h2 = document.querySelector("div.hello h2")
console.dir(h2);


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