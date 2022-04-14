import {useState, useEffect} from "react"


//React App을만들때 hiFn은 그렇게 쓸일이 없지만 byFn(Clean Up Function) 은 의외로 쓰는경우가 있음
function Hello(){
    function hiFn(){
        console.log("created :)")
        return byFn; 
    }
    function byFn(){
        console.log("destroy :(")
    }
    useEffect(hiFn, []) //function 종료시(destroy) 리턴발생 (Clean Up Function)

    useEffect(()=>{
        console.log("Muyaho~")
        return function(){
            console.log("O.K Bye...")
        }
    },[]) //function 종료시(destroy) 리턴발생 (Clean Up Function)

    
    return (
        <h1>Hello~</h1>
    )
}

function Example2(){
    const [showing, setShowing] = useState(false);
    const onClick = ()=> setShowing(prev => !prev)
    return(
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    )
}

export {Example2}