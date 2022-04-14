import React, { useState } from 'react'
import dicomParser from 'dicom-parser'
import fs from 'fs'
import {Buffer} from 'buffer'
import * as dicomDic from './dicomDic'

import './App.css'

enum ImplitExplit{
  Implit, //VR없음
  Explit, //VR있음
}

let IE:ImplitExplit = ImplitExplit.Implit;

let fls: FileList | null | File = null;
const reader = new FileReader()

const checkSqeuenceStartHead = async(buffer:Buffer, i:number)=>{
  const startHead = ["FF","FF","FF","FF","FE","FF","00","E0","FF","FF","FF","FF"]
  let headLen = 12;
  while(headLen--)
  {
    if (buffer[i+headLen].toString(16).padStart(2,'0').toUpperCase() !== startHead[headLen])
      return true;
  }
  return false;
}

const checkSqeuenceEndHead = async(buffer:Buffer, i:number)=>{
  const startHead1 = ["FE","FF","0D","E0","00","00","00","00","FE","FF","DD","E0","00","00","00","00"]
  let headLen = 16;
  while(headLen--)
  {
    if (buffer[i+headLen].toString(16).padStart(2,'0').toUpperCase() !== startHead1[headLen])
      return false;
  }
  return true;
}

const checkSqeuenceItemDelimitationHead = async(buffer:Buffer, i:number)=>{
  const startHead1 = ["FE","FF","0D","E0","00","00","00","00","FE","FF","00","E0","FF","FF","FF","FF"]
  let headLen = 16;
  while(headLen--)
  {
    if (buffer[i+headLen].toString(16).padStart(2,'0').toUpperCase() !== startHead1[headLen])
      return false;
  }
  return true;
}

const checkSQVR = async(buffer:Buffer, i:number)=>{
  //const startHead = ["53", "51"] SQ
  console.log(buffer[i].toString(16).padStart(2,'0').toUpperCase(), buffer[i+1].toString(16).padStart(2,'0').toUpperCase())
  if (buffer[i].toString(16).padStart(2,'0').toUpperCase() == "53" && buffer[i+1].toString(16).padStart(2,'0').toUpperCase() == "51")
    return true;
  else 
    return false;
}

const parseSequence = async(buffer:Buffer, i:number, padding:string) => {
  let cnt = 0;
  padding += "===========|||"
  if (await checkSQVR(buffer, i+cnt))
    cnt += 4;
  if (await checkSqeuenceStartHead(buffer, i+cnt))
  {
    return -1;
  }
  cnt += 12;
  console.log(padding, "Seqence Start!!=======================")
  for(; i+cnt < buffer.length;)
  {
    let tag1 = buffer[i+cnt+1].toString(16).padStart(2,'0').toUpperCase() + buffer[i+cnt].toString(16).padStart(2,'0').toUpperCase()
    let tag2 = buffer[i+cnt+3].toString(16).padStart(2,'0').toUpperCase() + buffer[i+cnt+2].toString(16).padStart(2,'0').toUpperCase()
    cnt += 4;
    let tag = `(${tag1},${tag2})`
    let dic = dicomDic.dictionaryTagToSnake[tag]
    let vr = String.fromCharCode(buffer[i+cnt], buffer[i+cnt+1]);
    let length
    if (dic.vr === "SQ")
    {
      console.log(padding, dic)
      console.log(padding, `${tag}, ${dic.name}`)
      let result = await parseSequence(buffer, i+cnt, padding)
      if (result === -1)
      {
        console.log(padding, "SomeThing Error Doing Sequense Parsing")
        break;
      }
      cnt += result;
      continue;
    }
    if (vr === dic.vr)
    {
      cnt += 2;
      length = buffer[i+cnt+1] * 10 + buffer[i+cnt]
      cnt += 2;
    }
    else
    {
      vr = "없음(" + dic.vr + ")";
      length = buffer[i+cnt+1] * 10 + buffer[i+cnt]
      cnt += 4;
    }

    let value:string = "";
    for(let j = 0; j < length; j++)
    {
      value += String.fromCharCode(buffer[i+cnt+j])
    }
    cnt += length;
    console.log(padding, dic)
    console.log(padding, `${tag}, ${vr}, ${length}, ${value}`)
    if (await checkSqeuenceItemDelimitationHead(buffer, i+cnt))
    {
      cnt += 16
      console.log(padding, "============================ITem Separate=======================")
    }
    if (await checkSqeuenceEndHead(buffer, i+cnt))
    {
      cnt += 16
      break;
    }

  }
  console.log(padding, "Seqence End!!=======================")
  return cnt;
}

const passDicomHead = async(buffer:Buffer)=>{
  const startHead = ["44","49","43","4D"]
  let cnt = 0;
  while(buffer[cnt] == 0)
  {
    cnt ++;
  }
  let len = 4;
  while(len--)
  {
    console.log("d===========",buffer[cnt + len].toString(16).padStart(2,'0').toUpperCase(), startHead[len])
    if (buffer[cnt + len].toString(16).padStart(2,'0').toUpperCase() !== startHead[len])
      return 0;
  }
  return cnt+4;
}

const privateDicomParse = (tag1:string,tag2:string,tag3:string,tag4:string)=>{
  return "yaho"
}

reader.onload = async(event: any)=>{
  const result = event.target.result;
  const data = result.split("base64,")[1];
  console.log(data);
  let buffer = Buffer.from(data, 'base64')
  console.log(buffer);
  let cnt = await passDicomHead(buffer);
  for(let i = cnt; i < buffer.length;)
  {
    let tag1_1 = buffer[i+1].toString(16).padStart(2,'0').toUpperCase()
    let tag1_2 = buffer[i].toString(16).padStart(2,'0').toUpperCase()
    let tag2_1 = buffer[i+3].toString(16).padStart(2,'0').toUpperCase()
    let tag2_2 = buffer[i+2].toString(16).padStart(2,'0').toUpperCase()
    i += 4;
    let tag = `(${tag1_1+tag1_2},${tag2_1+tag2_2})`
    let dic = dicomDic.dictionaryTagToSnake[tag]
    if (dic == undefined)
    {
      dic = privateDicomParse(tag1_1,tag1_2,tag2_1,tag2_2)
    }
    let vr = String.fromCharCode(buffer[i], buffer[i+1]);
    let length
    if (dic.vr === "SQ")
    {
      console.log(dic)
      console.log(`${tag}, ${dic.name}`)
      let result = await parseSequence(buffer, i, "")
      if (result === -1)
      {
        console.log("SomeThing Error Doing Sequense Parsing")
        break;
      }
      i += result;
      continue;
    }
    if (vr === dic.vr)
    {
      i += 2;
      length = buffer[i+1] * 10 + buffer[i]
      i += 2;
      IE = ImplitExplit.Implit
    }
    else
    {
      vr = "없음(" + dic.vr + ")";
      length = buffer[i+1] * 10 + buffer[i]
      i += 4;
      IE = ImplitExplit.Explit
    }

    let value:string = "";
    for(let j = 0; j < length; j++)
    {
      value += String.fromCharCode(buffer[i+j])
    }
    i += length;
    console.log(dic)
    console.log(`${tag}, ${vr}, ${length}, ${value}`)
  }
}

const  spradFile = (data:File)=>{
  reader.readAsDataURL(data);
  };

function App() {
  const [tag, setTag] = useState<string>("(0000,0100)")
  const [tagResult, setTagResult] = useState<string>("")

  const onChangeFileInput = (event: React.ChangeEvent<HTMLInputElement>)=>{
    fls = null;
    fls = event.target.files;
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const myungho = Buffer.from("노명효", )
    const muyaho = Buffer.from([179,235,184,237,200,191]);
    console.log(myungho)
    console.log(myungho.toString())
    console.log(muyaho)
    console.log(muyaho.toString())
  
    if (fls instanceof FileList)
    {
      spradFile(fls[0])
    }
    else if (fls instanceof File)
    {
      spradFile(fls)
    }
  }
  
  const onChangeTag = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const data = event.target.value;
    setTag(data);
  }
  
  const onSubmitSeartchTag = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = JSON.stringify(dicomDic.dictionaryTagToSnake[tag],null,'\t');
    console.log(text)
    setTagResult(text)
  }

  return (
    <div className="App">
      <form id="myform" onSubmit={onSubmit}>
        <input type="file" name="attachments" onChange={onChangeFileInput} multiple /><br/>
        <button type="submit">파싱</button>
      </form>
      <div id="Muyaho">
        <form id="searchTag" onSubmit={onSubmitSeartchTag}>
          <input type="text" placeholder='검색할태그입력' onChange={onChangeTag}></input>
          <button type="submit">검색</button>
        </form>
        <div id="tagResult">
          <pre>{tagResult}</pre>
        </div>
      </div>
    </div>
  )
}

export default App
