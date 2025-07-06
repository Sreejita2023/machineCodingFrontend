import React, { useState } from 'react'
import json from './components/data'
import "./index.css"
function Index() {
  const len=json.length
  const [opened,setOpened]=useState(new Array(len).fill(false))
  const handleClick=(id)=>{
    const curr=opened[id]
    const updated=[...opened]
    updated.map((_,index)=>{
      updated[index]=false
    })
    updated[id]=!curr
    setOpened(updated)
  }
  return (
    <div class="body">{
        (json && json.length>0)? json.map((item,index)=>(
            <div class="box" key={item.id}>
                <div class="ques" onClick={()=>handleClick(index)}>{item.ques} 
                    <span class="arrow" style={{ transform: `${opened[index]?"rotate(180deg)":"rotate(0deg)"}` }}>^</span>
                </div>
                 <div class="ans" style={{ display:`${opened[index]?"block":"none"}`}}>{item.ans}</div>
            </div>
         )):<div>No items available</div>
        }</div>
  )
}

export default Index