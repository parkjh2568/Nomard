import {Button} from "./Button"
import styles from "./Example1.module.css"
import React, {useState, useEffect} from "react"

function Example1() {
  const [count, setCount] = useState<number>(0);
  const [keyword, setKeyword] = useState<string>("");
  const onClick = () => setCount((prev) => prev + 1);
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    setKeyword(newValue);
  }
  console.log("■■■■■■■■I run all the time■■■■■■■■")

  useEffect(()=>{console.log("╔════First Rendering Page Start════╗")}, []) // 페이지 로딩시 단한번만 // property 바뀌어도 또 작업안함

  const renderEvent = ()=>{
    console.log("║ I Run only First Rendering Time")
  }
  useEffect(renderEvent, []) // 페이지 로딩시 단한번만 // property 바뀌어도 또 작업안함
  useEffect(()=>{console.log("║ keyword Change")}, [keyword]) //차음한번 로딩되고 keyword가 바뀔때만 반응해서 작업
  useEffect(()=>{console.log("║ count Change")}, [count]) //차음한번 로딩되고 count 바뀔때만 반응해서 작업
  useEffect(()=>{console.log("║ keyword or count Change")}, [keyword, count]) //차음한번 로딩되고 count 바뀔때만 반응해서 작업
  useEffect(()=>{console.log("╚════First Rendering Page End  ════╝")}, []) // 페이지 로딩시 단한번만 // property 바뀌어도 또 작업안함


  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1 className={styles.title}>Welcome Back!</h1>
      <h2>{count}</h2>
      <button onClick={onClick}>Click me!</button>
      <Button text={"Hello"}/>
    </div>
  )
}

export {Example1}
