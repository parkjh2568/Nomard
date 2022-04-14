import React, {useState} from "react"
import {Example1} from "./Example1"
import { Example2 } from "./Example2"
import { ToDo } from "./Practice1_ToDo"
import { CoinTracker } from "./Practice2_CoinTracker"
import style from "./App.module.css"

function StartPage(){
  return(
    <h2>진행한 실습내용을 선택하십시오</h2>
  )
}

function App() {
  const [index, setIndex] = useState<string>("4")
  const selectChange = (event:React.ChangeEvent<HTMLSelectElement>)=>{
    const value = event.currentTarget.value;
    setIndex(value)
  }
  return (
    <div>
      <h1>Hello I'm React Training Result</h1>
      <select className={style.select} value={index} onChange={selectChange}>
        <option value="xx">═════════════════════════Select Example═════════════════════════</option>
        <option value="1">Custom 요소 만들기, useEffect 사용 페이지 빌드시 단한번실행, 조건실행코드</option>
        <option value="2">Component 숨기기 되살리기시 이벤트</option>
        <option value="3">To Do List</option>
        <option value="4">Coin Tracker</option>

      </select>
      <hr/>
      {index === "xx" ? <StartPage /> : null }
      {index === "1" ? <Example1 /> : null }
      {index === "2" ? <Example2 /> : null }
      {index === "3" ? <ToDo /> : null }
      {index === "4" ? <CoinTracker /> : null }
    </div>
  )
}

export default App
