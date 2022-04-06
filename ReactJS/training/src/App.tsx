import React, {useState} from "react"
import {Example1} from "./Example1"

function StartPage(){
  return(
    <h2>진행한 실습내용을 선택하십시오</h2>
  )
}

function App() {
  const [index, setIndex] = useState<string>("0")
  const selectChange = (event:React.ChangeEvent<HTMLSelectElement>)=>{
    const value = event.currentTarget.value;
    setIndex(value)
  }
  return (
    <div>
      <h1>Hello I'm React Training Result</h1>
      <select value={index} onChange={selectChange}>
        <option value="xx">Select Example</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <hr/>
      {index === "xx" ? <StartPage /> : null }
      {index === "1" ? <Example1 /> : null }
    </div>
  )
}

export default App
