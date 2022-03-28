
const parent = document.querySelector("div.hello");
const title = document.querySelector("div.hello h1")
console.dir(parent);
console.dir(title);

//스타일변경
title.style.color = "blue";

//event    on으로 시작하는 대부분의 무언가는 event임 console.dir로 확인해보시고
//onmouse~~ 는 마우스 관련 이벤트

//이벤트 검색은 
//h1 html element mdn식으로 검색해서 찾아보셈(web api라는 타이틀의 문서로 확인)
//그곳에서 htmlElement확인


//onclick 추가하기 1
title.onclick = ()=>{
    alert("우하하 빵빠래")
}

//onclick 추가하기 2
function eventhandle(){
    alert("나는 두번재 온클릭이다")
    title.style.color = "blue"
}

//이벤트리스너 첫번째 요소는 console.dir로 찾은 on이벤트들에서 on뺀 스트링을 넣으면됨
//ex) onclick -> click
title.addEventListener("click", eventhandle)
//title.addEventListener("click", eventhandle()) <<처럼 ()도 같이넣으면 함수가 한번 실행되고 시작함
title.addEventListener("mouseenter", function(){
    title.innerHTML = "In Mouse"
    title.style.color = "green"
})
title.addEventListener("mouseleave", function(){
    title.innerHTML = "Mouse leave"
    title.style.color = "red"
})