
console.log("|||||||||||||||||||||||||||document||||||||||||||||||||||||||||")
console.log(document)
console.dir(document)

document.title = "무한~" //html title

console.log("|||||||||||||||||||||||||||id = title||||||||||||||||||||||||||||")
const title = document.getElementById("title") //id = title인 녀석을 가져옴 가장 최초의값 한개만 가져옴
console.log(title);
console.dir(title);

console.log("|||||||||||||||||||||||||||class = hello||||||||||||||||||||||||||||")
const hello = document.getElementsByClassName("hello") //class는 중복가능
console.log(hello)
console.dir(hello)

console.log("|||||||||||||||||||||||||||tag = div||||||||||||||||||||||||||||")
const tag = document.getElementsByTagName("div") //특정 태그값을가지는 요소 다가져옴
console.log(tag)
console.dir(tag)

console.log("|||||||||||||||||||||||||||query = .hello h1||||||||||||||||||||||||||||")
const query = document.querySelector(".hello h1") //css쿼리형태로 검색 이경우 hello클래스의 자식중 h1가지는놈을 가져온다는뜻 단하나만 가져옴 가장 처음찾아지는 단하나만 리턴
//class 접두 .    ex) .hello
//id 접두 #       ex) #hello
//tag 접두 없음   ex) div
//추가요소 :      ex) .hello:first-child
//ex) div.hello:first-child h1  << hello 클래스를 가진 div의 첫번째 자식인 h1인녀석
console.log(query)
console.dir(query)

console.log("|||||||||||||||||||||||||||queryall = .hello h1||||||||||||||||||||||||||||")
const queryall = document.querySelectorAll(".hello h1") //css쿼리형태로 검색 이경우 hello클래스의 자식중 h1가지는놈을 가져온다는뜻 단하나만 가져옴 가장 처음찾아지는 단하나만 리턴
console.log(queryall)
console.dir(queryall)